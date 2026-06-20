import path from 'path';
import { pathToFileURL } from 'url';

// Attempt several import strategies to be robust in Vercel's runtime
let serverEntry;
async function loadServerEntry() {
  if (serverEntry) return serverEntry;
  const candidates = [
    path.join(process.cwd(), 'dist', 'server', 'server.js'),
    path.join(process.cwd(), 'dist', 'server', 'server.cjs'),
    path.join(process.cwd(), 'dist', 'server', 'server.mjs'),
  ];
  for (const p of candidates) {
    try {
      const url = pathToFileURL(p).href;
      const mod = await import(url);
      serverEntry = mod && (mod.default ?? mod);
      console.log('Loaded server entry from', p);
      return serverEntry;
    } catch (err) {
      console.error('Failed to import server entry from', p, err && err.message);
    }
  }

  // Fallback: try relative import (older deployments)
  try {
    const mod = await import('../dist/server/server.js');
    serverEntry = mod && (mod.default ?? mod);
    console.log('Loaded server entry via relative import');
    return serverEntry;
  } catch (err) {
    console.error('Relative import attempt failed:', err && err.message);
  }

  throw new Error('Could not locate built SSR server entry in dist/server');
}

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(Buffer.from(c)));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  try {
    const protocol = req.headers["x-forwarded-proto"] || 'https';
    const host = req.headers.host || 'localhost';
    const url = new URL(req.url, `${protocol}://${host}`);

    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) {
      if (v) headers.set(k, Array.isArray(v) ? v.join(',') : v);
    }

    const body = req.method !== 'GET' && req.method !== 'HEAD' ? await getRawBody(req) : undefined;

    const request = new Request(url.toString(), {
      method: req.method,
      headers,
      body,
    });

    const entry = await loadServerEntry();
    const response = await entry.fetch(request, {}, {});

    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));
    const buffer = Buffer.from(await response.arrayBuffer());
    res.end(buffer);
  } catch (err) {
    console.error('SSR handler error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
