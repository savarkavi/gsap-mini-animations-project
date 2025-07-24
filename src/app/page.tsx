import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-serif">
      <Link href="/navigation-menu-1">Navigation menu 1</Link>
      <Link href="/landing-page-reveal-1">Landing page reveal 1</Link>
      <Link href="/animate-background-on-hover">
        Animate background on hover
      </Link>
      <Link href="/scrollTrigger-pinning-cards">
        Scroll trigger pinning cards
      </Link>
    </div>
  );
}
