import { LogoMark } from "./LogoMark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <LogoMark size={24} />
              <span style={{ fontWeight: 500 }}>
                agentwallet
                <span
                  style={{
                    color: "var(--fg-muted)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 14,
                  }}
                >
                  .sh
                </span>
              </span>
            </div>
            <p>
              The first multi-chain CLI wallet designed for autonomous AI
              agents. By the team behind Begin Wallet.
            </p>
          </div>
          <div>
            <h6>Product</h6>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#code">Code samples</a>
              </li>
              <li>
                <a href="#skills">Skills &amp; MCP</a>
              </li>
              <li>
                <a href="#security">Security</a>
              </li>
            </ul>
          </div>
          <div>
            <h6>Resources</h6>
            <ul>
              <li>
                <a
                  href="https://github.com/arlo-agent/begin-cli"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/arlo-agent/begin-cli/blob/main/README.md"
                  target="_blank"
                  rel="noreferrer"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/@beginwallet/cli"
                  target="_blank"
                  rel="noreferrer"
                >
                  npm
                </a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
            </ul>
          </div>
          <div>
            <h6>Begin Wallet</h6>
            <ul>
              <li>
                <a href="https://begin.is" target="_blank" rel="noreferrer">
                  begin.is
                </a>
              </li>
              <li>
                <a href="#">Browser extension</a>
              </li>
              <li>
                <a href="#">Mobile app</a>
              </li>
              <li>
                <a href="#">Twitter / X</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 · agentwallet.sh · MIT</span>
          <span className="by-begin">
            <span className="mark">
              <LogoMark size={14} />
            </span>
            <span>by Begin Wallet</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
