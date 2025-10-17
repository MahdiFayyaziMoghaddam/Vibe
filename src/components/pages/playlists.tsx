import Button from "@/components/atoms/Button/Button";
import PlaylistCard from "@/components/molecules/Card/PlaylistCard";

export default function Playlists() {
  return (
    <div className="flex flex-col flex-wrap items-start relative grow overflow-hidden">
      <div className="w-full grow overflow-auto py-5">
        <div className="grow grid grid-cols-6 max-2xl:grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 container">
          {Array.from({ length: 18 }).map((_, i) => (
            <PlaylistCard
              key={i}
              creator="mmd"
              // imgSrc="/images/paint.jpg"
              href="/5"
              title="Play & Rush"
            />
          ))}
        </div>
      </div>
      <Button
        variant="primary"
        className="absolute p-0! size-12! max-md:size-8! max-md:text-[2rem]! text-5xl! bottom-5 right-5 max-md:bottom-3 max-md:right-3 rounded-full!"
      >
        +
      </Button>
    </div>
  );
}
