"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "How is this different from Begin Wallet?",
    a: "Begin Wallet is the consumer-facing wallet for humans — browser extension, mobile app, friendly UI. Agent Wallet is the same crypto primitives reshaped for autonomous agents: headless, scriptable, JSON-out. Same team, same security model, different surface.",
  },
  {
    q: "Do I need to hold crypto to check balances?",
    a: "No. Read-only operations — balances, history, UTXOs, token metadata — are free across every supported chain. You only need funds when you're sending, staking, or swapping.",
  },
  {
    q: "Where are my keys stored?",
    a: "Locally, encrypted with AES-256-GCM, in ~/.begin-cli/wallets/. Optionally backed by the OS keychain (macOS, Windows, Linux). All cryptographic operations — derivation, signing, encryption — happen on-device. Network calls are read-only against Blockfrost and chain RPCs.",
  },
  {
    q: "Can I use this on testnet?",
    a: "Yes. Pass --network preprod or --network preview. Get test ADA from the Cardano Faucet, test SOL from devnet faucets, etc. We recommend starting there.",
  },
  {
    q: "Is this safe for production agents?",
    a: "It's beta. Use small amounts, set spending limits at the agent layer, prefer offline-signing for high-value flows, and monitor your addresses. Same advice as any wallet, more applicable when nobody's watching.",
  },
  {
    q: "What chains are supported?",
    a: "Today: Cardano, Solana, Bitcoin, and EVM (Ethereum + L2s). All four addresses are derived from a single wallet. More chains are on the roadmap.",
  },
  {
    q: "Why a CLI and not an SDK?",
    a: "Agents already know how to call shells. The CLI surface is a forcing function for clean, composable, JSON-shaped operations. We expose the underlying TypeScript as a library too if you need it.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="shell section">
      <div className="faq">
        <div>
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title" style={{ marginTop: 16 }}>
            Common <span className="italic">questions</span>.
          </h2>
        </div>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? "open" : ""}`.trim()}
            >
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="toggle" aria-hidden="true" />
              </button>
              <div className="faq-a">
                <div>{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
