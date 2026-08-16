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
  fill,
  ...props
}) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={cn(
          "imgbox missing overflow-hidden",
          fill ? "absolute inset-0 w-full h-full" : "relative w-full h-full",
          wrapperClassName
        )}
        data-alt={(fallbackAlt || alt || "GIMPEX").toUpperCase()}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={cn("w-full h-full object-cover", className)}
      onError={() => setError(true)}
      {...props}
    />
  );
};
