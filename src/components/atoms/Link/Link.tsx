"use client";
import L from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, ReactNode } from "react";

interface ILinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function Link({ href, children, className = "" }: ILinkProps) {
  const router = useRouter();

  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;

    e.preventDefault();
    e.currentTarget.blur();

    if (!window.document.startViewTransition) {
      router.push(href);
      return;
    }

    window.document.startViewTransition(() => {
      router.push(href);
    });
  };
  return (
    <L
      href={href}
      onClick={(e) => handle(e)}
      className={`text-[0.85rem] text-dark-200 hover: hover:underline underline-offset-[10%] transition-colors duration-200 active:text-primary max-sm:underline ${className}`}
    >
      {children}
    </L>
  );
}
