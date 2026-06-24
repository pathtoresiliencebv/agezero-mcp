"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, Terminal, Package } from "@/components/icons";

const CATEGORIES = [
  {
    label: "UI/UX Toolkit",
    items: [
      { name: "UI Kit", href: "https://ui.agezero.io", desc: "32+ shadcn-style primitives" },
      { name: "Templates", href: "https://templates.agezero.io", desc: "6 landing page templates" },
      { name: "Magic", href: "https://magic.agezero.io", desc: "AI component generator" },
    ]
  },
  {
    label: "AI Agents Toolkit",
    items: [
      { name: "Skills", href: "https://skills.agezero.io", desc: "12 built-in AI skills" },
      { name: "Tools", href: "https://tools.agezero.io", desc: "Theme builder & playground" },
      { name: "SEO", href: "https://seo.agezero.io", desc: "Next SEO kit" },
    ]
  },
  {
    label: "Operating System",
    items: [
      { name: "MCP", href: "https://mcp.agezero.io", desc: "MCP server" },
      { name: "CLI", href: "https://cli.agezero.io", desc: "CLI toolkit" },
      { name: "Connect", href: "https://connect.agezero.io", desc: "API connectors" },
    ]
  },
];

const HOME_LINK = { name: "agezero.nl", href: "https://agezero.nl", desc: "The full AgeZero platform" };

export function MegaMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
      >
        <span className="text-xs">⬡</span>
        <span>Toolkits</span>
        <span className="text-[10px]">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full z-50 mt-2 w-[640px] overflow-hidden rounded-xl border border-border/80 bg-background/95 shadow-2xl backdrop-blur-sm">
            <div className="grid divide-x divide-border/60 sm:grid-cols-3">
              {CATEGORIES.map((cat) => (
                <div key={cat.label} className="p-3">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {cat.label}
                  </p>
                  {cat.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="mb-1 flex items-start gap-2 rounded-md px-2 py-1.5 transition-colors hover:bg-accent group"
                    >
                      <span className="mt-0.5 text-xs text-muted-foreground group-hover:text-primary">
                        →
                      </span>
                      <div>
                        <p className="text-xs font-medium text-foreground">{item.name}</p>
                        <p className="text-[10px] text-muted-foreground">{item.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <div className="border-t border-border/60 px-4 py-3">
              <a
                href={HOME_LINK.href}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors hover:bg-accent"
              >
                <span className="text-xs">🏠</span>
                <div>
                  <p className="text-xs font-semibold text-primary">{HOME_LINK.name}</p>
                  <p className="text-[10px] text-muted-foreground">{HOME_LINK.desc}</p>
                </div>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
