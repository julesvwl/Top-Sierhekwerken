import type { ReactNode } from "react";
import { uspItems, type UspItem } from "@/lib/data";

const USP_ICONS: Record<UspItem["icon"], ReactNode> = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 9l9-6 9 6v12H3V9z" />
      <path d="M9 21v-7h6v7" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 16V8a2 2 0 0 1 2-2h9v10" />
      <path d="M14 10h4l3 3v3h-7" />
      <circle cx="7.5" cy="17.5" r="1.8" />
      <circle cx="17.5" cy="17.5" r="1.8" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 2l3 6 6 .9-4.5 4.3 1.1 6.3L12 16.8 6.4 19.5l1.1-6.3L3 8.9 9 8z" />
    </svg>
  ),
};

export default function UspStrip() {
  return (
    <div className="usp">
      {uspItems.map((item) => (
        <div key={item.title} className="item">
          <div className="ico">{USP_ICONS[item.icon]}</div>
          <div className="label">
            <strong>{item.title}</strong>
            {item.body}
          </div>
        </div>
      ))}
    </div>
  );
}
