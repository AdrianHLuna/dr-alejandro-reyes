"use client";

import { useState } from "react";
import { FaNotesMedical } from "react-icons/fa";

interface ClinicalImageProps {
  src: string;
  alt: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function ClinicalImage({ src, alt, className = "", icon }: ClinicalImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-accent/5 to-warm-light relative ${className}`}>
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4c243c_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="text-primary/30 relative z-10">
          {icon || <FaNotesMedical size={36} />}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
}
