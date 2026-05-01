export function Roadmap() {
  return (
    <section className="shell section">
      <div className="section-head">
        <span className="section-eyebrow">Roadmap</span>
        <h2 className="section-title">
          What <span className="italic">ships next</span>.
        </h2>
      </div>
      <div className="roadmap">
        <div className="road-col shipped">
          <h4>
            <span className="pip" />
            Shipped
          </h4>
          <div className="status">v0.1 · live</div>
          <ul>
            <li>Multi-chain address derivation</li>
            <li>Balance &amp; UTXOs · all chains</li>
            <li>Transaction history</li>
            <li>Send ADA · SOL · BTC · EVM</li>
            <li>JSON output mode</li>
            <li>
              Non-interactive mode (<code>--yes</code>)
            </li>
            <li>Blockfrost integration</li>
          </ul>
        </div>
        <div className="road-col progress">
          <h4>
            <span className="pip" />
            In progress
          </h4>
          <div className="status">v0.2 · weeks</div>
          <ul>
            <li>Native token transfers</li>
            <li>Staking &amp; delegation</li>
            <li>QR code generation</li>
            <li>Swap orders (Minswap, Jupiter)</li>
            <li>MCP server (full surface)</li>
            <li>Offline signing UX polish</li>
          </ul>
        </div>
        <div className="road-col planned">
          <h4>
            <span className="pip" />
            Planned
          </h4>
          <div className="status">v1.0 · later</div>
          <ul>
            <li>Spending limits &amp; policies</li>
            <li>Hardware wallet support</li>
            <li>HashiCorp Vault integration</li>
            <li>Bridge (cross-chain)</li>
            <li>Webhooks for tx events</li>
            <li>Multisig flows</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
