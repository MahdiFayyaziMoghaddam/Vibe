import { ReactNode } from "react";
import Image from "../../atoms/Image/Image";

interface IMusicCardProps {
  imgSrc?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children?: ReactNode;
}

export default function MusicCard({
  imgSrc = "",
  subtitle = "",
  title = "",
  className,
  children,
}: IMusicCardProps) {
  return (
    <div
      className={`bg-transparent flex items-center gap-2 rounded-sm w-63 ${className}`}
    >
      <Image
        className="size-[2.8rem]! aspect-square rounded-[0.2rem] border-1 border-dark-400"
        src={imgSrc}
        alt={title}
      />
      <div className="flex flex-col grow">
        <p className="text-[1rem] text-dark-200 line-clamp-1">{title}</p>
        <p className="text-[0.8rem] text-dark-300 line-clamp-1">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}
