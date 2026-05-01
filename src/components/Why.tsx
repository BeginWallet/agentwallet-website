export function Why() {
  return (
    <section id="features" className="shell section">
      <div className="section-head">
        <span className="section-eyebrow">Why agent wallet</span>
        <h2 className="section-title">
          Designed for the way{" "}
          <span className="italic">agents</span> actually work.
        </h2>
        <p className="section-sub">
          Traditional wallets assume a human is watching. Agent Wallet assumes
          nobody is — and gives your agent everything it needs to operate
          safely on its own.
        </p>
      </div>

      <div className="why-grid">
        <div className="why-cell span-6">
          <span className="num">01 / NON-INTERACTIVE</span>
          <h3>
            Zero prompts, <span className="italic">zero clicks</span>.
          </h3>
          <p>
            Every command takes <code>--yes</code>. No modals, no browser
            extensions, no GUI in the loop. Pipe stdout straight into{" "}
            <code>jq</code> and keep moving.
          </p>
          <div className="demo">
            {`$ begin send addr1q…rty 10 `}
            <span className="k">--yes --json</span>
            {`
  ✓ submitted · txHash a3f1c89e…
  exit 0`}
          </div>
        </div>

        <div className="why-cell span-6">
          <span className="num">02 / JSON-NATIVE</span>
          <h3>
            Output your agent can <span className="italic">parse</span>.
          </h3>
          <p>
            Append <code>--json</code> to anything. Structured success and
            error envelopes, stable shapes, exit codes worth listening to.
          </p>
          <div className="demo">
            {`{ `}
            <span className="k">&quot;success&quot;</span>
            {`: true,
  `}
            <span className="k">&quot;data&quot;</span>
            {`: { `}
            <span className="k">&quot;txHash&quot;</span>
            {`: `}
            <span className="s">&quot;a3f1…&quot;</span>
            {`,
            `}
            <span className="k">&quot;fee&quot;</span>
            {`: `}
            <span className="s">&quot;0.170000&quot;</span>
            {` } }`}
          </div>
        </div>

        <div className="why-cell span-4">
          <span className="num">03 / MULTI-CHAIN</span>
          <h3>
            One wallet.
            <br />
            Four chains.
          </h3>
          <p>
            Cardano, Solana, Bitcoin, and EVM addresses derived from a single
            wallet. Send, receive, balance — same flags everywhere.
          </p>
        </div>

        <div className="why-cell span-4">
          <span className="num">04 / KEYS STAY HOME</span>
          <h3>
            Encrypted <span className="italic">on-device</span>.
          </h3>
          <p>
            Wallets are generated and stored locally with AES-256-GCM,
            optionally backed by the OS keychain. No remote signers, no cloud
            sync. Backup is a one-line export when you want it.
          </p>
        </div>

        <div className="why-cell span-4">
          <span className="num">05 / OFFLINE SIGNING</span>
          <h3>
            Air-gapped <span className="italic">by design</span>.
          </h3>
          <p>
            Build on an online machine, sign on an offline one, submit
            anywhere. Drop in hardware wallets via the same flow.
          </p>
        </div>

        <div className="why-cell span-6">
          <span className="num">06 / EXIT CODES THAT MEAN SOMETHING</span>
          <h3>
            Errors agents can <span className="italic">recover</span> from.
          </h3>
          <p>
            Insufficient funds is <code>4</code>. Network unreachable is{" "}
            <code>3</code>. Wrong password is <code>11</code>. Build retry
            logic that&apos;s actually retry logic.
          </p>
        </div>

        <div className="why-cell span-6">
          <span className="num">07 / SKILLS &amp; MCP</span>
          <h3>
            Drop-in for <span className="italic">your</span> agent stack.
          </h3>
          <p>
            Ships with Skill manifests for OpenClaw and an MCP server for
            Claude / Cursor / any host. Wire it in once, expose six commands.
          </p>
        </div>
      </div>
    </section>
  );
}
