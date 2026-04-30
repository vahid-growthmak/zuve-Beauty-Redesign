"use client";

import { useEffect, useState } from "react";
import { announcementMessages } from "@/content/home";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDismissed(window.localStorage.getItem("zuve-ann-dismissed") === "1");
    }
  }, []);

  useEffect(() => {
    if (dismissed) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % announcementMessages.length),
      5000,
    );
    return () => clearInterval(id);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div className="bg-ink text-bone hidden md:block">
      <div className="container-1440 flex items-center justify-center gap-3 py-2 relative">
        <span className="text-[11px] uppercase tracking-wider2 transition-opacity duration-500 ease-out-expo">
          {announcementMessages[index]}
        </span>
        <button
          aria-label="Dismiss announcement"
          onClick={() => {
            setDismissed(true);
            if (typeof window !== "undefined")
              window.localStorage.setItem("zuve-ann-dismissed", "1");
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-bone/60 hover:text-bone"
        >
          <X size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
