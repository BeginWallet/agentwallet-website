type Skill = {
  id: string;
  title: string;
  desc: string;
  cmd: string;
};

const SKILLS: Skill[] = [
  {
    id: "begin-wallet",
    title: "Wallet ops",
    desc: "Create, restore, list wallets · derive addresses across all four chains · export with care.",
    cmd: "begin wallet address --json",
  },
  {
    id: "begin-discovery",
    title: "Discovery",
    desc: "Search tokens, fetch prices, inspect on-chain history. Read-only primitives for planning.",
    cmd: "begin token search HOSKY",
  },
  {
    id: "begin-staking",
    title: "Staking",
    desc: "Browse pools, delegate, check status, withdraw rewards. Yield strategies as one-liners.",
    cmd: "begin stake delegate BEGIN",
  },
  {
    id: "begin-swap",
    title: "Swap",
    desc: "Quote, execute, cancel DEX orders. Slippage and routing exposed in JSON for agent decision-making.",
    cmd: "begin swap 10 ADA SNEK",
  },
  {
    id: "begin-mint",
    title: "Mint",
    desc: "Define policies, mint native tokens, manage on-chain provenance — all programmable.",
    cmd: "begin mint --policy ./p.json",
  },
  {
    id: "begin-offline",
    title: "Offline signing",
    desc: "Build → transfer → sign → submit. Air-gap-friendly workflow with file or QR-code handoff.",
    cmd: "begin sign --tx unsigned.tx",
  },
];

export function Skills() {
  return (
    <section id="skills" className="shell section">
      <div className="section-head">
        <span className="section-eyebrow">Skills · MCP · Hooks</span>
        <h2 className="section-title">
          Six skill manifests,{" "}
          <span className="italic">ready to ship</span>.
        </h2>
        <p className="section-sub">
          Every capability area ships as a Skill manifest your agent can load
          directly. No glue code, no schema-writing — just point your runtime
          at the skills directory.
        </p>
      </div>
      <div className="skills-grid">
        {SKILLS.map((s) => (
          <div className="skill-card" key={s.id}>
            <span className="skill-id">skill / {s.id}</span>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
            <div className="skill-cmd">
              <span className="pre">$</span> {s.cmd}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
