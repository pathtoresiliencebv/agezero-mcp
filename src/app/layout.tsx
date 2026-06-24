import * as React from "react";
import "./globals.css";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Sparkles } from "@/components/icons";
import { MegaMenu } from "@/components/mega-menu";

const SUBDOMAINS = {
  ui: "https://ui.agezero.io",
  templates: "https://templates.agezero.io",
  magic: "https://magic.agezero.io",
  mcp: "https://mcp.agezero.io",
  cli: "https://cli.agezero.io",
  skills: "https://skills.agezero.io",
  tools: "https://tools.agezero.io",
  seo: "https://seo.agezero.io",
} as const;

const CROSS_NAV = [
  { label: "UI", subdomain: "ui" as const, href: SUBDOMAINS.ui },
  { label: "Templates", subdomain: "templates" as const, href: SUBDOMAINS.templates },
  { label: "Magic", subdomain: "magic" as const, href: SUBDOMAINS.magic },
  { label: "Skills", subdomain: "skills" as const, href: SUBDOMAINS.skills },
  { label: "Tools", subdomain: "tools" as const, href: SUBDOMAINS.tools },
  { label: "SEO", subdomain: "seo" as const, href: SUBDOMAINS.seo },
  { label: "MCP", subdomain: "mcp" as const, href: SUBDOMAINS.mcp },
  { label: "CLI", subdomain: "cli" as const, href: SUBDOMAINS.cli },
];

export const metadata = {
  title: "AgeZero MCP Server",
  description: "Model Context Protocol server for the AgeZero UI icon library. 5 tools, zero config, stdio transport.",
};

export default function McpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4 sm:px-6">
          <Link href="https://ui.agezero.io" className="flex items-center gap-2 text-sm font-semibold">
            <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
              <Sparkles size={14} />
            </span>
            AgeZero
          </Link>
          <div className="hidden lg:block">
            <MegaMenu />
          </div>
          <nav className="hidden items-center gap-1 lg:flex">
            {CROSS_NAV.map((item) => (
              <Link
                key={item.subdomain}
                href={item.href}
                className={cn(
                  "rounded-md px-2.5 py-1.5 text-xs transition-colors",
                  item.subdomain === "mcp"
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a href="https://github.com/pathtoresiliencebv/agezero-ui/tree/main/packages/agezero-mcp" target="_blank" rel="noreferrer" className="ml-auto text-xs text-muted-foreground hover:text-foreground">
            GitHub
          </a>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
