import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Wallet — A wallet your agent can actually use",
  description:
    "A headless, multi-chain CLI wallet for autonomous AI agents. Cardano, Solana, Bitcoin, EVM — one wallet, JSON output, zero prompts. By Begin Wallet.",
  metadataBase: new URL("https://agentwallet.sh"),
  openGraph: {
    title: "Agent Wallet — A wallet your agent can actually use",
    description:
      "A headless, multi-chain CLI wallet for autonomous AI agents. By Begin Wallet.",
    url: "https://agentwallet.sh",
    siteName: "Agent Wallet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Wallet",
    description:
      "A headless, multi-chain CLI wallet for autonomous AI agents.",
  },
  icons: { icon: "/logo-mark.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0c" },
  ],
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('aw-theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    var root = document.documentElement;
    root.dataset.theme = theme;
    if (!root.dataset.density) root.dataset.density = 'compact';
    root.style.setProperty('--accent', 'oklch(58% 0.14 245)');
    root.style.setProperty('--accent-soft', 'oklch(94% 0.03 245)');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
