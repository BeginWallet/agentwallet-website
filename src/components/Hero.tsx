"use client";

import { Fragment, useEffect, useState, type ReactNode } from "react";
import { InstallCard } from "./InstallCard";

type Frame = {
  title: string;
  badge: string;
  lines: ReactNode[];
};

const HERO_TERMINAL_FRAMES: Frame[] = [
  {
    title: "agent-session — bash",
    badge: "live",
    lines: [
      <>
        <span className="t-prompt">agent ❯</span>{" "}
        <span className="t-cmd">begin</span>{" "}
        <span className="t-cmd">balance</span>{" "}
        <span className="t-flag">--json</span>
      </>,
      "",
      <span className="t-muted">┌──────────────────────────────────────────────────┐</span>,
      <span className="t-muted">│</span>,
      <>
        <span className="t-muted">│ </span>
        <span className="t-key">&quot;address&quot;</span>:{" "}
        <span className="t-str">&quot;addr1qy2kv2…3xqfp&quot;</span>,
      </>,
      <>
        <span className="t-muted">│ </span>
        <span className="t-key">&quot;network&quot;</span>:{" "}
        <span className="t-str">&quot;mainnet&quot;</span>,
      </>,
      <>
        <span className="t-muted">│ </span>
        <span className="t-key">&quot;balance&quot;</span>: {"{"}
      </>,
      <>
        <span className="t-muted">│   </span>
        <span className="t-key">&quot;ada&quot;</span>:{" "}
        <span className="t-str">&quot;125.430000&quot;</span>,
      </>,
      <>
        <span className="t-muted">│   </span>
        <span className="t-key">&quot;lovelace&quot;</span>:{" "}
        <span className="t-num">125430000</span>
      </>,
      <>
        <span className="t-muted">│ </span>
        {"},"}
      </>,
      <>
        <span className="t-muted">│ </span>
        <span className="t-key">&quot;tokens&quot;</span>: [<span className="t-num">2</span> assets]
      </>,
      <span className="t-muted">│</span>,
      <span className="t-muted">└──────────────────────────────────────────────────┘</span>,
      "",
      <>
        <span className="t-prompt">agent ❯</span>{" "}
        <span className="t-cmd">begin</span> <span className="t-cmd">send</span>{" "}
        <span className="t-str">addr1q…rty7</span>{" "}
        <span className="t-num">10</span>{" "}
        <span className="t-flag">--yes --json</span>
      </>,
      <span className="t-comment"># non-interactive — no prompts, no confirmation dialogs</span>,
      "",
      <span className="t-success">✓ submitted</span>,
      <>
        <span className="t-muted">  txHash  </span>
        <span className="t-accent">a3f1c89e2b…704d</span>
      </>,
      <>
        <span className="t-muted">  fee     </span>
        <span className="t-accent">0.170000 ADA</span>
      </>,
      <span className="t-muted">  exit 0</span>,
    ],
  },
  {
    title: "agent-session — bash",
    badge: "live",
    lines: [
      <>
        <span className="t-prompt">agent ❯</span>{" "}
        <span className="t-cmd">begin</span>{" "}
        <span className="t-cmd">wallet</span>{" "}
        <span className="t-cmd">create</span> agent-01
      </>,
      <span className="t-success">✓ wallet created · encrypted on device</span>,
      <span className="t-muted">  ~/.begin-cli/wallets/agent-01.enc</span>,
      "",
      <>
        <span className="t-prompt">agent ❯</span>{" "}
        <span className="t-cmd">begin</span>{" "}
        <span className="t-cmd">wallet</span>{" "}
        <span className="t-cmd">address</span>{" "}
        <span className="t-flag">--json</span>{" "}
        <span className="t-flag">|</span> <span className="t-cmd">jq</span>
      </>,
      <span className="t-muted">{"{"}</span>,
      <>
        <span className="t-muted">  </span>
        <span className="t-key">&quot;cardano&quot;</span>: {"{ "}
        <span className="t-key">&quot;paymentAddress&quot;</span>:{" "}
        <span className="t-str">&quot;addr1q…&quot;</span> {" }"},
      </>,
      <>
        <span className="t-muted">  </span>
        <span className="t-key">&quot;solana&quot;</span>:{"  { "}
        <span className="t-key">&quot;address&quot;</span>:{" "}
        <span className="t-str">&quot;5sNQ…rPvB&quot;</span> {" }"},
      </>,
      <>
        <span className="t-muted">  </span>
        <span className="t-key">&quot;bitcoin&quot;</span>: {"{ "}
        <span className="t-key">&quot;address&quot;</span>:{" "}
        <span className="t-str">&quot;bc1qxy…7p9k&quot;</span> {" }"},
      </>,
      <>
        <span className="t-muted">  </span>
        <span className="t-key">&quot;evm&quot;</span>:{"     { "}
        <span className="t-key">&quot;address&quot;</span>:{" "}
        <span className="t-str">&quot;0x4a8f…c2e1&quot;</span> {" }"}
      </>,
      <span className="t-muted">{"}"}</span>,
      "",
      <>
        <span className="t-prompt">agent ❯</span>{" "}
        <span className="t-cmd">begin</span> <span className="t-cmd">stake</span>{" "}
        <span className="t-cmd">delegate</span>{" "}
        <span className="t-str">BEGIN</span>{" "}
        <span className="t-flag">--yes</span>
      </>,
      <span className="t-success">✓ delegated to BEGIN</span>,
      <>
        <span className="t-muted">  pool    </span>
        <span className="t-accent">pool1k7…q9zw</span>
      </>,
      <>
        <span className="t-muted">  active  </span>
        <span className="t-accent">epoch 488</span>
      </>,
      "",
      <>
        <span className="t-prompt">agent ❯</span>{" "}
        <span className="t-cmd">begin</span> <span className="t-cmd">swap</span>{" "}
        <span className="t-num">10</span> ADA{" "}
        <span className="t-flag">→</span> SNEK{" "}
        <span className="t-flag">--yes</span>
      </>,
      <span className="t-success">✓ quote 9.94% slippage · routed via Minswap</span>,
    ],
  },
];

function HeroTerminal() {
  const [frameIdx, setFrameIdx] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const frame = HERO_TERMINAL_FRAMES[frameIdx];
    if (visibleLines < frame.lines.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 90);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setVisibleLines(0);
      setFrameIdx((i) => (i + 1) % HERO_TERMINAL_FRAMES.length);
    }, 4200);
    return () => clearTimeout(t);
  }, [visibleLines, frameIdx]);

  const frame = HERO_TERMINAL_FRAMES[frameIdx];
  const shown = frame.lines.slice(0, visibleLines);

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="lights">
          <span />
          <span />
          <span />
        </div>
        <div className="title">{frame.title}</div>
        <div className="badge">{frame.badge}</div>
      </div>
      <div className="terminal-body">
        {shown.map((line, i) => (
          <Fragment key={i}>
            <span className="t-line">
              {line}
              {"\n"}
            </span>
          </Fragment>
        ))}
        <span className="cursor" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero shell">
      <div className="hero-grid">
        <div>
          <span className="hero-eyebrow">
            <span className="pill-dot" />
            v0.1 — built for autonomous agents
          </span>
          <h1 className="hero-h1">
            A wallet your<br />
            <span className="italic">agent</span> can<br />
            actually use.
          </h1>
          <p className="hero-sub">
            A headless, multi-chain CLI wallet for autonomous AI agents. No
            GUIs, no prompts, no browser extensions — just clean commands,
            structured JSON, and keys that stay on your device.
          </p>
          <InstallCard cmd="npx @beginwallet/cli balance" />
          <div className="hero-cta-row">
            <a
              href="https://github.com/arlo-agent/begin-cli"
              target="_blank"
              rel="noreferrer"
            >
              <span>↗</span> View on GitHub
            </a>
            <a href="#code">
              <span>›</span> Read the docs
            </a>
            <span style={{ color: "var(--fg-faint)" }}>
              MIT licensed · Node 18+
            </span>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="v">4</div>
              <div className="l">Chains supported</div>
            </div>
            <div className="hero-stat">
              <div className="v">0</div>
              <div className="l">Interactive prompts</div>
            </div>
            <div className="hero-stat">
              <div className="v">~5min</div>
              <div className="l">To first transaction</div>
            </div>
            <div className="hero-stat">
              <div className="v">100%</div>
              <div className="l">Local key signing</div>
            </div>
          </div>
        </div>
        <div>
          <HeroTerminal />
        </div>
      </div>
    </section>
  );
}
