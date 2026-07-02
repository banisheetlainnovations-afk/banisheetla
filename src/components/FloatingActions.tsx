import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant transition hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a
        href={COMPANY.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute inline-flex h-14 w-14 animate-ping rounded-full bg-[#25D366] opacity-30" />
      </a>
    </div>
  );
}
