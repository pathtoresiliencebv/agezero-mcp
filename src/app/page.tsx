import Link from "next/link";
import { ArrowUpRight, Search, Package, Terminal, Check } from "@/components/icons";

const TOOLS = [
  { name: "search_icons", desc: "Fuzzy search the icon library by name, group, or tag." },
  { name: "list_icons", desc: "Return every icon in a given group (brand, agents, ui, status, media, communication, arrows, files)." },
  { name: "get_icon", desc: "Fetch the SVG source of one icon by name." },
  { name: "suggest_icons", desc: "Given a UI intent (e.g. 'close', 'play', 'share'), return the top-N matching icons." },
  { name: "get_library_stats", desc: "Total count, breakdown by group, recently added icons." },
];

export default function McpPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-border/60">
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at top, hsl(var(--primary)/0.10), transparent 60%)" }} />
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <div className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-background/60 px-3 py-1 text-xs backdrop-blur">
            <Package size={12} /> npm install @agezero/mcp
          </div>
          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
            MCP server for the<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}>
              AgeZero UI icon library.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            120+ hand-rolled 1.5px stroke icons, queryable from Claude Code, Cursor, and any MCP-compatible client. 5 tools, stdio transport, zero runtime deps.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="https://github.com/pathtoresiliencebv/agezero-ui/tree/main/packages/agezero-mcp" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
              View source <ArrowUpRight size={16} />
            </a>
            <Link href="https://ui.agezero.io/icons/" className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-xs hover:bg-accent">
              Browse icons <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* INSTALL */}
      <section className="border-b border-border/60 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight">Install</h2>
          <p className="mt-2 text-muted-foreground">
            Add the server to your <code className="rounded bg-muted px-1 font-mono text-xs">mcp.json</code> config:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-border/60 bg-card p-4 text-xs leading-relaxed">
            <code>{`{
  "mcpServers": {
    "agezero": {
      "command": "npx",
      "args": ["-y", "@agezero/mcp"]
    }
  }
}`}</code>
          </pre>
          <p className="mt-4 text-sm text-muted-foreground">
            Or run the bundled binary directly:
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg border border-border/60 bg-card p-4 text-xs leading-relaxed">
            <code>{`npm install -g @agezero/mcp
agezero-mcp`}</code>
          </pre>
        </div>
      </section>

      {/* TOOLS */}
      <section className="border-b border-border/60 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-center gap-2">
            <Check size={20} />
            <h2 className="text-2xl font-semibold tracking-tight">5 tools</h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {TOOLS.map((t) => (
              <div key={t.name} className="rounded-lg border border-border/60 bg-card p-5">
                <div className="flex items-center gap-2 font-mono text-sm font-semibold">
                  <Terminal size={14} className="text-muted-foreground" />
                  {t.name}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USAGE */}
      <section className="border-b border-border/60 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight">Example: search_icons</h2>
          <p className="mt-2 text-muted-foreground">Ask your agent to find icons for a feature:</p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-border/60 bg-card p-4 text-xs leading-relaxed">
            <code>{`> User: "I need a settings icon and a logout icon."
> Agent calls: search_icons({ q: "settings logout", limit: 5 })
> Returns: [{ name: "Settings", group: "ui" },
            { name: "LogOut", group: "ui" },
            { name: "Sliders", group: "ui" },
            ... ]`}</code>
          </pre>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Open source. MIT licensed.</h2>
          <p className="mt-3 text-muted-foreground">
            The MCP server is part of the AgeZero UI monorepo. Read the source, propose improvements, ship your own.
          </p>
          <a href="https://github.com/pathtoresiliencebv/agezero-ui/tree/main/packages/agezero-mcp" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            View on GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
