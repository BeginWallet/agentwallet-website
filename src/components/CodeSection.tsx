"use client";

import { useState, type ReactNode } from "react";

type Sample = {
  label: string;
  glyph: string;
  code: ReactNode;
};

const CODE_SAMPLES: Record<string, Sample> = {
  bash: {
    label: "bash",
    glyph: "$",
    code: (
      <code>
        <span className="c-cmt"># Check balance, then conditionally send</span>
        {"\n"}
        <span className="c-prompt">$ </span>
        <span className="c-cmd">BALANCE</span>=$(
        <span className="c-fn">begin</span> balance{" "}
        <span className="c-flag">--json</span> | <span className="c-fn">jq</span>{" "}
        <span className="c-str">&apos;.data.balance.ada&apos;</span>)
        {"\n\n"}
        <span className="c-prompt">$ </span>
        <span className="c-key">if</span> (( $(<span className="c-fn">echo</span>{" "}
        <span className="c-str">&quot;$BALANCE &gt; 10&quot;</span> |{" "}
        <span className="c-fn">bc</span>) )); <span className="c-key">then</span>
        {"\n"}
        {"    "}TX=$(<span className="c-fn">begin</span> send addr1recipient{" "}
        <span className="c-num">5</span>{" "}
        <span className="c-flag">--yes --json</span>)
        {"\n"}
        {"    "}
        <span className="c-fn">echo</span>{" "}
        <span className="c-str">
          &quot;Sent! TX: $(echo $TX | jq -r &apos;.data.txHash&apos;)&quot;
        </span>
        {"\n"}
        <span className="c-key">fi</span>
        {"\n\n"}
        <span className="c-out">› Sent! TX: a3f1c89e2b704d1f...</span>
      </code>
    ),
  },
  python: {
    label: "python",
    glyph: ">>>",
    code: (
      <code>
        <span className="c-key">import</span>{" "}
        <span className="c-cmd">subprocess, json</span>
        {"\n\n"}
        <span className="c-key">def</span>{" "}
        <span className="c-fn">send_ada</span>(to: <span className="c-cmd">str</span>,
        amount: <span className="c-cmd">float</span>) -&gt;{" "}
        <span className="c-cmd">dict</span>:
        {"\n"}
        {"    "}r = subprocess.<span className="c-fn">run</span>(
        {"\n"}
        {"        "}[<span className="c-str">&quot;begin&quot;</span>,{" "}
        <span className="c-str">&quot;send&quot;</span>, to,{" "}
        <span className="c-fn">str</span>(amount),{" "}
        <span className="c-str">&quot;--yes&quot;</span>,{" "}
        <span className="c-str">&quot;--json&quot;</span>],
        {"\n"}
        {"        "}capture_output=<span className="c-num">True</span>, text=
        <span className="c-num">True</span>
        {"\n"}
        {"    "})
        {"\n"}
        {"    "}
        <span className="c-key">if</span> r.returncode !={" "}
        <span className="c-num">0</span>:
        {"\n"}
        {"        "}
        <span className="c-key">raise</span>{" "}
        <span className="c-fn">Exception</span>(json.
        <span className="c-fn">loads</span>(r.stdout)[
        <span className="c-str">&quot;error&quot;</span>])
        {"\n"}
        {"    "}
        <span className="c-key">return</span> json.
        <span className="c-fn">loads</span>(r.stdout)
        {"\n\n"}
        <span className="c-cmt"># In your agent loop:</span>
        {"\n"}
        result = <span className="c-fn">send_ada</span>(
        <span className="c-str">&quot;addr1q...&quot;</span>,{" "}
        <span className="c-num">10.0</span>)
        {"\n"}
        <span className="c-fn">print</span>(result[
        <span className="c-str">&quot;data&quot;</span>][
        <span className="c-str">&quot;txHash&quot;</span>])
      </code>
    ),
  },
  mcp: {
    label: "MCP tool",
    glyph: "{ }",
    code: (
      <code>
        {"{"}
        {"\n"}
        {"  "}
        <span className="c-key">&quot;name&quot;</span>:{" "}
        <span className="c-str">&quot;cardano_send&quot;</span>,
        {"\n"}
        {"  "}
        <span className="c-key">&quot;description&quot;</span>:{" "}
        <span className="c-str">&quot;Send ADA to an address&quot;</span>,
        {"\n"}
        {"  "}
        <span className="c-key">&quot;parameters&quot;</span>: {"{"}
        {"\n"}
        {"    "}
        <span className="c-key">&quot;to&quot;</span>:{"     { "}
        <span className="c-key">&quot;type&quot;</span>:{" "}
        <span className="c-str">&quot;string&quot;</span>
        {" }"},
        {"\n"}
        {"    "}
        <span className="c-key">&quot;amount&quot;</span>:{" { "}
        <span className="c-key">&quot;type&quot;</span>:{" "}
        <span className="c-str">&quot;number&quot;</span>
        {" }"}
        {"\n"}
        {"  "}
        {"},"}
        {"\n"}
        {"  "}
        <span className="c-key">&quot;command&quot;</span>:{" "}
        <span className="c-str">
          &quot;begin send {"{to}"} {"{amount}"} --yes --json&quot;
        </span>
        {"\n"}
        {"}"}
        {"\n\n"}
        <span className="c-cmt">
          # Drops directly into Claude Desktop, Cursor, or
        </span>
        {"\n"}
        <span className="c-cmt"># any MCP-compatible host. No SDK needed.</span>
      </code>
    ),
  },
  yaml: {
    label: "Skill",
    glyph: "▾",
    code: (
      <code>
        <span className="c-cmt"># skills/begin-cli/SKILL.md</span>
        {"\n"}
        <span className="c-key">name</span>: begin-cli
        {"\n"}
        <span className="c-key">description</span>:{" "}
        <span className="c-str">Cardano wallet for sending ADA and tokens</span>
        {"\n\n"}
        <span className="c-key">commands</span>:
        {"\n"}
        {"  - "}begin wallet create {"{name}"}{" "}
        <span className="c-flag">--yes --json</span>
        {"\n"}
        {"  - "}begin balance {"{address}"}{" "}
        <span className="c-flag">--json</span>
        {"\n"}
        {"  - "}begin send {"{to} {amount}"}{" "}
        <span className="c-flag">--yes --json</span>
        {"\n"}
        {"  - "}begin stake status <span className="c-flag">--json</span>
        {"\n"}
        {"  - "}begin swap {"{from} {to} {amount}"}{" "}
        <span className="c-flag">--yes</span>
        {"\n\n"}
        <span className="c-key">storage</span>:{" "}
        <span className="c-str">on-device · AES-256-GCM</span>
      </code>
    ),
  },
};

export function CodeSection() {
  const [tab, setTab] = useState<keyof typeof CODE_SAMPLES>("bash");
  const sample = CODE_SAMPLES[tab];
  return (
    <section id="code" className="shell section">
      <div className="section-head">
        <span className="section-eyebrow">Drop it in anywhere</span>
        <h2 className="section-title">
          The <span className="italic">command line</span> is the API.
        </h2>
        <p className="section-sub">
          If your agent can call a shell, it can hold a wallet. Wire it into
          your stack via shell, Python, MCP, or skill manifest — same surface,
          same JSON shape.
        </p>
      </div>
      <div className="code-tabs">
        {Object.entries(CODE_SAMPLES).map(([k, v]) => (
          <button
            type="button"
            key={k}
            className={`code-tab ${tab === k ? "active" : ""}`.trim()}
            onClick={() => setTab(k as keyof typeof CODE_SAMPLES)}
          >
            <span className="glyph">{v.glyph}</span>
            {v.label}
          </button>
        ))}
      </div>
      <pre className="code-block">{sample.code}</pre>
    </section>
  );
}
