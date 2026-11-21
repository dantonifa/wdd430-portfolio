"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex gap-6 font-medium">
      <Link
        href="/"
        className={`font-bold text-white ${
          isActive("/") ? "underline underline-offset-4" : ""
        }`}
        aria-current={isActive("/") ? "page" : undefined}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`font-bold text-white ${
          isActive("/about") ? "underline underline-offset-4" : ""
        }`}
        aria-current={isActive("/about") ? "page" : undefined}
      >
        About
      </Link>
      <Link
        href="/contact"
        className={`font-bold text-white ${
          isActive("/contact") ? "underline underline-offset-4" : ""
        }`}
        aria-current={isActive("/contact") ? "page" : undefined}
      >
        Contact
      </Link>
    </nav>
  );
}