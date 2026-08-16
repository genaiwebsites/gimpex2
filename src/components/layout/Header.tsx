"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onOpenMobileMenu: () => void;
  isSolid?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileMenu, isSolid = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hasDarkBanner =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/products" ||
    pathname === "/clients" ||
    pathname === "/gallery" ||
    pathname === "/contact";

  const forceSolid = isSolid || !hasDarkBanner;

  return (
    <header className={cn("hd", forceSolid && "solid", scrolled && "scrolled")}>
      <div className="hd-in">
        <Link className="brand" href="/">
          <span className="brand-mk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21c5.4-1.9 8-6.6 8-13C13.4 8 8.6 9.9 6.6 15.2 6.6 18 8.7 21 12 21z" />
              <path d="M12 21c0-5.6 2.6-9.4 8-12" />
            </svg>
          </span>
          <span>
            {siteConfig.name}
            <small>{siteConfig.tagline}</small>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          {siteConfig.navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(isActive && "active")}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link className="btn btn-hd" href="/contact">
          <span>Get a quote</span>
          <span className="circ">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h13M12 5l7 7-7 7" />
            </svg>
          </span>
        </Link>

        <button
          className="burger"
          aria-label="Open menu"
          onClick={onOpenMobileMenu}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};
