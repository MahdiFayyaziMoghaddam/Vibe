"use client";
import Link from "@/components/atoms/Link/Link";

function NotFound() {
  return (
    <div className="relative grow flex flex-col justify-center items-center gap-8 overflow-hidden">
      <h1 className="absolute text-primary/8 text-[30vw]! font-bold select-none -z-10">
        404
      </h1>
      <p className="text-dark-100 text-4xl font-semibold">Page not found!</p>
      <p className="text-dark-200 text-xl">This page does not exist.</p>
      <Link href="/" className="text-lg! text-primary">
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound;
