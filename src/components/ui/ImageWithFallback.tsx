"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackAlt?: string;
  wrapperClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackAlt,
  wrapperClassName,
  className,
  ...props
}) => {
  const [error, setError] = useState(false);

  return (
    <div
      className={cn(
        "imgbox overflow-hidden relative",
        error && "missing",
        wrapperClassName
      )}
      data-alt={(fallbackAlt || alt || "GIMPEX").toUpperCase()}
    >
      {!error && (
        <Image
          src={src}
          alt={alt}
          className={cn("w-full h-full object-cover transition-opacity duration-300", className)}
          onError={() => setError(true)}
          {...props}
        />
      )}
    </div>
  );
};
