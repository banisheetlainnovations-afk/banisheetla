import serverModule from '../dist/server/server.js';

const serverEntry = serverModule && (serverModule.default ?? serverModule);

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

    const response = await serverEntry.fetch(request, {}, {});

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
