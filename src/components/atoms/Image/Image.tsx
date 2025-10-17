"use client";
import I from "next/image";

interface ImageProps {
  src?: string;
  className?: string;
  alt?: string;
  customSize?: boolean;
}

/** @params customSize prop can set image position to static */
export default function Image({
  src,
  alt = "",
  className,
  customSize,
}: ImageProps) {
  if (!src) {
    return (
      <div
        className={`flex justify-center items-center bg-linear-135 from-dark-800 via-dark-500 to-dark-800 select-none *:text-primary/85 shrink-0 ${className}`}
        aria-atomic
      >
        <img
          src="/images/note.png"
          alt="note"
          className="size-[70%] opacity-90"
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden shrink-0 ${className}`}>
      <I
        src={src || "/"}
        alt={alt}
        className={`size-[100%] absolute object-cover select-none`}
        fill
        draggable={false}
        loading="lazy"
        onError={() => {}}
      />
    </div>
  );
}
