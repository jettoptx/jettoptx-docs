import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority }: BrandLogoProps) {
  return (
    <Image
      src="/logos/jett-opt-zia.png"
      alt="JETT OPT"
      width={1000}
      height={375}
      priority={priority}
      className={`jett-opt-lockup h-8 w-auto md:h-10 ${className ?? ""}`}
    />
  );
}
