const ROWS: Array<[string, string, string]> = [
  ["Non-interactive mode", "Requires clicks & prompts", "--yes on every command"],
  ["JSON output", "Human-formatted only", "--json on every command"],
  ["Scriptable", "GUI-dependent", "Pipe-friendly · stdin/stdout"],
  ["Key custody", "Browser extension or cloud", "Encrypted locally · on-device"],
  ["Multi-chain from one seed", "Per-chain wallet", "Cardano · SOL · BTC · EVM"],
  ["Designed for", "Humans clicking buttons", "Autonomous agents"],
];

export function Comparison() {
  return (
    <section className="shell section">
      <div className="section-head">
        <span className="section-eyebrow">Wallets weren&apos;t built for this</span>
        <h2 className="section-title">
          Traditional wallets vs{" "}
          <span className="italic">Agent Wallet</span>.
        </h2>
      </div>
      <div className="comparison">
        <div className="compare-row head">
          <div className="feat">Capability</div>
          <div>Traditional wallet</div>
          <div>Agent Wallet</div>
        </div>
        {ROWS.map((r, i) => (
          <div className="compare-row" key={i}>
            <div className="feat">{r[0]}</div>
            <div className="cell">
              <span className="badge-x">×</span>
              {r[1]}
            </div>
            <div className="cell win">
              <span className="badge-c">✓</span>
              {r[2]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
