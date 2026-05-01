export function Security() {
  return (
    <section id="security" className="shell section">
      <div className="security">
        <div>
          <span className="section-eyebrow">Security</span>
          <h2 className="section-title" style={{ marginTop: 16 }}>
            Trust the <span className="italic">cryptography</span>, not the
            chrome.
          </h2>
          <p className="section-sub" style={{ marginTop: 16 }}>
            No browser extensions to phish. No remote signing services. Keys
            are derived, encrypted, and used locally — or kept in memory
            only, if that&apos;s your threat model.
          </p>
          <ol className="security-list">
            <li>
              <span className="idx">01</span>
              <div>
                <h5>AES-256-GCM at rest</h5>
                <p>
                  Wallets stored in <code>~/.begin-cli/wallets/</code> are
                  encrypted with a password you choose.
                </p>
              </div>
            </li>
            <li>
              <span className="idx">02</span>
              <div>
                <h5>OS keychain integration</h5>
                <p>
                  macOS Keychain, Windows Credential Manager, Linux Secret
                  Service — opt-in, no password retyping.
                </p>
              </div>
            </li>
            <li>
              <span className="idx">03</span>
              <div>
                <h5>You own the recovery</h5>
                <p>
                  Backup phrase is exported only when you ask. Until then it
                  lives encrypted on disk — never on a server, never in a
                  browser extension.
                </p>
              </div>
            </li>
            <li>
              <span className="idx">04</span>
              <div>
                <h5>Air-gapped signing</h5>
                <p>
                  Build transactions online, sign on a separate machine,
                  submit anywhere. Files or QR codes — your call.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div>
          <div className="offline-diagram">
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--fg-faint)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              offline-signing flow
            </div>
            <div className="offline-step">
              <span className="icon">↗</span>
              <code>
                begin send addr1… 10{" "}
                <span className="flag">--build-only</span> --out tx.unsigned
              </code>
              <span className="label">Online</span>
            </div>
            <div className="offline-step">
              <span className="icon air">⌁</span>
              <code style={{ color: "var(--fg-muted)" }}>
                // transfer via USB or QR code
              </code>
              <span className="label">Air gap</span>
            </div>
            <div className="offline-step">
              <span className="icon">✎</span>
              <code>
                begin sign <span className="flag">--tx</span> tx.unsigned --out
                tx.signed
              </code>
              <span className="label">Offline</span>
            </div>
            <div className="offline-step">
              <span className="icon air">⌁</span>
              <code style={{ color: "var(--fg-muted)" }}>
                // transfer signed back
              </code>
              <span className="label">Air gap</span>
            </div>
            <div className="offline-step">
              <span className="icon">↗</span>
              <code>
                begin submit <span className="flag">--tx</span> tx.signed
              </code>
              <span className="label">Online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
