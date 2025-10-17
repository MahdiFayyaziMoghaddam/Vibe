import Image from "@/components/atoms/Image/Image";

export default function Logo({ className }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center gap-1 select-none ${className}`}
    >
      <div className="flex items-center gap-1">
        <p className="text-3xl font-semibold text-gradient bg-linear-135 from-primary to-secondary">
          {process.env.NEXT_PUBLIC_APP_NAME}
        </p>
        <Image src="/images/note.png" alt="logo" className="size-8!" />
      </div>
      <span className="text-[0.7rem] text-dark-300 font-medium">
        Version: {process.env.NEXT_PUBLIC_APP_VERSION}
      </span>
    </div>
  );
}
