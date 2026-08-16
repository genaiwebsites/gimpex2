"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mobileLinks = [
  { label: "Home", href: "/", number: "01" },
  { label: "About", href: "/about", number: "02" },
  { label: "Products", href: "/products", number: "03" },
  { label: "Clients", href: "/clients", number: "04" },
  { label: "Gallery", href: "/gallery", number: "05" },
  { label: "Contact", href: "/contact", number: "06" },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={cn("mmenu", isOpen && "open")}
      role="dialog"
      aria-label="Menu"
      aria-hidden={!isOpen}
    >
      <button className="x" aria-label="Close menu" onClick={onClose}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {mobileLinks.map((link) => (
        <Link key={link.href} href={link.href} onClick={onClose}>
          {link.label}
          <i>{link.number}</i>
        </Link>
      ))}
    </div>
  );
};
