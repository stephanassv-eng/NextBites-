import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="brand" href="/">
        🍲 NextBites
      </Link>

      <div className="nav-links">
        <Link href="/recipes.ts">Recipes</Link>

        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
      </div>
    </nav>
  );
}