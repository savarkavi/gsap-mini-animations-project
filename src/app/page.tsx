import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-serif">
      <Link href="/navigation-menu-1">Navigation menu 1</Link>
    </div>
  );
}
