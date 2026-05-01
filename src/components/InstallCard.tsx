"use client";

import { useState } from "react";

type InstallCardProps = {
  cmd?: string;
  className?: string;
};

export function InstallCard({
  cmd = "npx @beginwallet/cli",
  className = "",
}: InstallCardProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    try {
      navigator.clipboard.writeText(cmd);
    } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const parts = cmd.split(" ");
  const head = parts[0];
  const tail = parts.slice(1).join(" ");

  return (
    <div className={`install-card ${className}`.trim()}>
      <span className="prompt">$</span>
      <span className="cmd">
        <span className="tok-cmd">{head} </span>
        <span className="tok-pkg">{tail}</span>
      </span>
      <button
        type="button"
        className={`copy-btn ${copied ? "copied" : ""}`.trim()}
        onClick={onCopy}
        aria-label={copied ? "Copied" : `Copy ${cmd}`}
      >
        {copied ? <>✓ copied</> : <>Copy</>}
      </button>
    </div>
  );
}
