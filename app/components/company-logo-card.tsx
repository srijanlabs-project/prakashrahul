"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

type CompanyLogoCardProps = {
  name: string;
  logo?: string | StaticImageData;
};

export function CompanyLogoCard({ name, logo }: CompanyLogoCardProps) {
  const [hasLogoError, setHasLogoError] = useState(false);
  const shouldShowLogo = Boolean(logo) && !hasLogoError;

  return (
    <div className="group flex h-40 items-center justify-center border border-border bg-surface/60 p-6 transition-colors duration-300 hover:bg-surface">
      {shouldShowLogo ? (
        <Image
          src={logo!}
          alt={name}
          width={280}
          height={140}
          className="max-h-24 w-auto object-contain grayscale opacity-70 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
          onError={() => setHasLogoError(true)}
        />
      ) : (
        <div className="text-center text-sm font-semibold text-muted">{name}</div>
      )}
    </div>
  );
}
