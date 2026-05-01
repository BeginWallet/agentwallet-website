import { LogoMark } from "./LogoMark";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <a href="#" className="nav-brand">
          <span className="mark">
            <LogoMark size={28} />
          </span>
          <span className="name">
            agentwallet<span className="ext">.sh</span>
          </span>
          <span className="nav-by">by Begin Wallet</span>
        </a>
        <div className="nav-links">
          <a href="#features" className="nav-link-hide">
            Features
          </a>
          <a href="#code" className="nav-link-hide">
            Code
          </a>
          <a href="#skills" className="nav-link-hide">
            Skills
          </a>
          <a href="#security" className="nav-link-hide">
            Security
          </a>
          <ThemeToggle />
          <a
            href="https://github.com/arlo-agent/begin-cli"
            className="nav-cta"
            target="_blank"
            rel="noreferrer"
          >
            <span>Install</span>
            <span style={{ opacity: 0.6 }}>↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
