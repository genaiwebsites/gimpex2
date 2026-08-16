import React from "react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface CtaBannerProps {
  eyebrow?: string;
  title: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  eyebrow = "Start a project",
  title,
  buttonText = "Talk to our engineering desk",
  buttonHref = "/contact",
  className,
}) => {
  return (
    <div className={cn("cta rv in", className)}>
      <div>
        <span className="eyebrow plain">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <Button variant="ink" href={buttonHref}>
        {buttonText}
      </Button>
    </div>
  );
};
