import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "lime" | "ink" | "white" | "ghost" | "line" | "hd";
  href?: string;
  pad?: boolean;
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "lime",
  href,
  pad = false,
  arrow = true,
  children,
  className,
  ...props
}) => {
  const variantClass = {
    lime: "btn-lime",
    ink: "btn-ink",
    white: "btn-white",
    ghost: "btn-ghost",
    line: "btn-line",
    hd: "btn-hd",
  }[variant];

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="circ">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </>
  );

  const combinedClasses = cn("btn", variantClass, pad && "pad", className);

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
