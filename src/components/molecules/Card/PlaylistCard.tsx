"use client";
import Button from "@/components/atoms/Button/Button";
import Image from "@/components/atoms/Image/Image";
import Link from "@/components/atoms/Link/Link";
import Tooltip from "@/components/atoms/Tooltip/Tooltip";
import { IoPlay } from "react-icons/io5";

interface IPlaylistCardProps {
  href: string;
  title: string;
  imgSrc?: string;
  creator: string;
}

export default function PlaylistCard({
  creator,
  href,
  title,
  imgSrc,
}: IPlaylistCardProps) {
  return (
    <div className="flex flex-col hover:bg-dark-400/25 rounded-md overflow-hidden hover:shadow shadow-dark-900/70 p-6 max-xl:p-5 max-lg:p-5 max-sm:p-4 duration-150">
      <Link href={`/playlists${href}`}>
        <Image className="w-full aspect-square bg-dark-300 p-[9%] rounded-md border-1 border-dark-400" />
      </Link>
      <div className="flex items-end justify-between mt-4 w-full gap-2">
        <div className="grow *:line-clamp-1">
          <Link
            href={`/playlists${href}`}
            className="text-dark-200 text-[0.9rem]! max-lg:text-[0.85rem]! max-md:text-[0.8rem]!"
          >
            <Tooltip title={title} placement="topLeft">
              {title}
            </Tooltip>
          </Link>
          <p className="text-dark-300 text-[0.7rem] max-lg:text-[0.65rem] max-md:text-[0.6rem] mt-1">
            Created by {creator} , 15 songs
          </p>
        </div>
      </div>
    </div>
  );
}
