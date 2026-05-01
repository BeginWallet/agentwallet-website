import Image from "next/image";

const CHAINS = [
  { name: "Cardano", ticker: "ADA", icon: "/chains/cardano-ada-blue.svg" },
  { name: "Solana", ticker: "SOL", icon: "/chains/solana-sol-logo.svg" },
  { name: "Bitcoin", ticker: "BTC", icon: "/chains/bitcoin-btc-logo.svg" },
  { name: "Ethereum", ticker: "ETH", icon: "/chains/ethereum-eth-logo.svg" },
];

export function Chains() {
  return (
    <section className="shell">
      <div className="chains">
        <div className="label">One mnemonic ·</div>
        <div className="chains-list">
          {CHAINS.map((c) => (
            <span key={c.name} className="chain-item">
              <span className="glyph">
                <Image
                  src={c.icon}
                  alt={`${c.name} logo`}
                  width={22}
                  height={22}
                />
              </span>{" "}
              {c.name} <span className="ticker">{c.ticker}</span>
            </span>
          ))}
          <span className="chain-item" style={{ color: "var(--fg-faint)" }}>
            <span className="glyph" style={{ borderStyle: "dashed" }}>
              +
            </span>{" "}
            more soon
          </span>
        </div>
      </div>
    </section>
  );
}
