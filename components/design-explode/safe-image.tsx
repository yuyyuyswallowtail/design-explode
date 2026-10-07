"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/** next/image with a gradient fallback if the remote photo fails. Parent must be `relative`. */
export function SafeImage(props: ImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={String(props.alt)}
        className="absolute inset-0 bg-gradient-to-br from-tangerine via-lilac to-aqua"
      />
    );
  }
  return <Image {...props} onError={() => setFailed(true)} />;
}
