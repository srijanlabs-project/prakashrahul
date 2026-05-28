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
    <div className="group flex h-36 items-center justify-center rounded-[28px] border border-white/10 bg-white/5 p-6">
      {shouldShowLogo ? (
        <Image
          src={logo!}
          alt={name}
          width={220}
          height={96}
          className="max-h-20 w-auto object-contain opacity-90 transition duration-300 group-hover:scale-105"
          onError={() => setHasLogoError(true)}
        />
      ) : (
        <div className="text-center text-lg font-bold text-white">{name}</div>
      )}
    </div>
  );
}
