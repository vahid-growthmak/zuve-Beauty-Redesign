"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const sizeChart = [
  ["#0", 14],
  ["#1", 15],
  ["#2", 15.5],
  ["#3", 16],
  ["#4", 16.5],
  ["#5", 17],
  ["#6", 17.5],
  ["#7", 18],
  ["#8", 19],
  ["#9", 19.5],
  ["#10", 20],
  ["#11", 21],
  ["#12", 22],
] as const;

export function SizingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<"measure" | "chart" | "quiz">("measure");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sizing guide"
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={ref}
        className="relative bg-bone w-full max-w-[720px] max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-bone z-10 flex items-center justify-between px-6 md:px-10 pt-8 pb-4 border-b border-ink/10">
          <h2 className="font-serif text-h2" style={{ fontWeight: 300 }}>
            Sizing Guide
          </h2>
          <button
            aria-label="Close sizing guide"
            onClick={onClose}
            className="p-2 hover:opacity-70"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div className="px-6 md:px-10">
          <div className="flex border-b border-ink/10 mt-2">
            {(
              [
                { id: "measure", label: "How to Measure" },
                { id: "chart", label: "Size Chart" },
                { id: "quiz", label: "Fit Quiz" },
              ] as const
            ).map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-4 md:px-6 py-3 text-[11px] uppercase tracking-wider2 border-b-2 -mb-px transition-colors ${
                  tab === t.id
                    ? "border-ink text-ink"
                    : "border-transparent text-mute hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="py-8">
            {tab === "measure" && (
              <div className="space-y-6">
                <ol className="space-y-5 list-decimal list-inside marker:text-mute marker:text-small">
                  <li className="text-body text-ink/85">
                    Place a flexible measuring tape across the widest part of
                    your nail bed.
                  </li>
                  <li className="text-body text-ink/85">
                    Note the width to the nearest millimetre.
                  </li>
                  <li className="text-body text-ink/85">
                    Repeat for each finger and the thumb.
                  </li>
                  <li className="text-body text-ink/85">
                    Match each width against the chart on the next tab.
                  </li>
                </ol>
                <div className="bg-cream p-5">
                  <p className="text-small font-medium mb-1">Coin reference</p>
                  <p className="text-small text-ink/80">
                    A ₹10 coin measures approximately 27&nbsp;mm. Place it next
                    to your nail to gauge proportion.
                  </p>
                </div>
                <a href="#" className="link-hairline">
                  Download printable ruler (PDF)
                </a>
              </div>
            )}

            {tab === "chart" && (
              <div className="overflow-x-auto">
                <table className="w-full text-small">
                  <thead>
                    <tr className="border-b border-ink/10">
                      <th className="text-left py-3 pr-6 eyebrow">Size</th>
                      <th className="text-left py-3 eyebrow">Width (mm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeChart.map(([s, w]) => (
                      <tr key={s} className="border-b border-ink/5">
                        <td className="py-3 pr-6">{s}</td>
                        <td className="py-3">{w} mm</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {tab === "quiz" && (
              <div className="space-y-5">
                <p className="text-body text-ink/85">
                  Answer four short questions to receive a recommended starting
                  shape and size template.
                </p>
                <ol className="space-y-4 list-decimal list-inside marker:text-mute marker:text-small">
                  <li className="text-body">How long are your natural nails?</li>
                  <li className="text-body">Do you prefer rounded or sharp tips?</li>
                  <li className="text-body">How wide is your nail bed at the cuticle?</li>
                  <li className="text-body">What is the longest you've worn a press-on?</li>
                </ol>
                <button className="btn-ghost mt-4">Begin the fit quiz</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
