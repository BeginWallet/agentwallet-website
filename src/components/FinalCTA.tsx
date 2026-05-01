import { InstallCard } from "./InstallCard";

export function FinalCTA() {
  return (
    <section className="shell section">
      <div className="final-cta">
        <div className="final-cta-inner">
          <div>
            <h2>
              Hand your agent
              <br />a <span className="italic">real wallet</span>.
            </h2>
            <p>
              One install. Four chains. Zero prompts. Try it now — no API key,
              no signup, no extension to install.
            </p>
          </div>
          <div>
            <InstallCard cmd="npx @beginwallet/cli wallet create" />
            <div
              style={{
                marginTop: 16,
                display: "flex",
                gap: 18,
                flexWrap: "wrap",
                fontSize: 12,
                fontFamily: "var(--font-mono)",
                color: "#8a8a82",
                letterSpacing: "0.04em",
              }}
            >
              <span>v0.1.0</span>
              <span>·</span>
              <span>node ≥ 18</span>
              <span>·</span>
              <span>MIT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
