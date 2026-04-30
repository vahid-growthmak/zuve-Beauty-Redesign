"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFab({ productName }: { productName?: string } = {}) {
  const message = productName
    ? `Hi, I have a question about ${productName}.`
    : "Hi, I have a question about Zuve.";
  const href = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed z-30 bottom-6 right-6 w-14 h-14 rounded-full bg-success text-bone flex items-center justify-center shadow-lg hover:bg-ink transition-colors"
    >
      <MessageCircle size={24} strokeWidth={1.5} />
    </a>
  );
}
