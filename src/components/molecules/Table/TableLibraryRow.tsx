"use client";

import { useState } from "react";
import { IoPlay } from "react-icons/io5";
import durationFormatter from "@/utils/durationFormatter";
import { RiPlayListAddFill } from "react-icons/ri";
import { MdQueue } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import Equalizer from "@/components/atoms/Equalizer/Equalizer";
import Tooltip from "@/components/atoms/Tooltip/Tooltip";
import Button from "@/components/atoms/Button/Button";
import { useToast } from "@/contexts/ToastContext";
import { useAppState } from "@/contexts/StateContext";
import Image from "@/components/atoms/Image/Image";

interface ITableRowProps {
  id: number;
  imgSrc?: string;
  title: string;
  authors?: string;
  album?: string;
  duration?: number;
  number?: number;
  selected?: boolean;
}

export default function TableLibraryRow({
  id,
  title,
  album = "",
  authors = "",
  duration = 0,
  imgSrc = "",
  number = 100,
  selected = false,
}: ITableRowProps) {
  const [isHover, setIsHover] = useState(false);
  const { state, dispatch } = useAppState();
  const setToast = useToast();

  return (
    <>
      <tr
        className={`px-5 *:py-2 *:shrink-0 duration-100 text-sm text-dark-200 gap-2 backdrop-blur-2xl ${
          selected
            ? "bg-primary/10! hover:bg-primary/10! *:border-primary/90! *:border-[1px]! *:border-y-[1.8px]! *:first:border-l-[1.8px]! *:last:border-r-[1.8px]!"
            : "bg-dark-900 hover:bg-dark-600/70 *:border-[1px] *:border-dark-400!"
        } max-sm:border-none!`}
        onMouseOver={() => !selected && setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <td className="max-sm:hidden">
          <div className="flex-center text-[0.78rem] shrink-0 *:shrink-0">
            {selected ? (
              state.isPlaying ? (
                <Equalizer className="*:bg-primary/70" />
              ) : (
                <span className="text-primary">{number + 1}</span>
              )
            ) : isHover ? (
              <>
                <Tooltip title={`Play ${title}`} placement="top">
                  <Button
                    variant="icon"
                    className="p-[4px]! max-lg:p-[3.5px]! max-md:p-[3px]!"
                    onClick={() =>
                      dispatch({ type: "SET_MUSIC_INDEX", payload: number })
                    }
                  >
                    <IoPlay className="text-[1.1rem] max-lg:text-[1.05rem] max-md:text-[1rem]" />
                  </Button>
                </Tooltip>
              </>
            ) : (
              number + 1
            )}
          </div>
        </td>
        <td className="p-2 max-sm:py-0.5 max-sm:px-1">
          <div className="flex items-center gap-2.5 max-sm:gap-1.5">
            <Image
              className="size-[2.5rem]! aspect-square! rounded-[0.2rem] border-[1px] border-dark-300 max-sm:size-[1.8rem]! overflow-hidden"
              src={imgSrc}
              alt={title}
            />
            <div className="flex flex-col grow">
              <p
                className="text-[0.8rem] text-dark-200 line-clamp-1 leading-[1.6] max-sm:text-[0.6rem]"
                title={title}
              >
                {title}
              </p>
              <p
                className="text-[0.65rem] text-dark-200/60 line-clamp-1 leading-[1.6] max-sm:text-[0.45rem]"
                title={authors}
              >
                {authors}
              </p>
            </div>
          </div>
        </td>
        <td className="p-1 text-[0.8rem] text-center max-sm:text-[0.5rem]">
          <p className="line-clamp-1" title={album}>
            {album}
          </p>
        </td>
        <td className="p-1 text-[0.8rem] text-center max-sm:text-[0.5rem]">
          <p className="line-clamp-1">{durationFormatter(duration)}</p>
        </td>
        <td className="p-1 max-sm:p-0.5 text-right">
          <div className="flex justify-center items-center gap-3 w-full max-sm:gap-1 *:shrink-0">
            {isHover || selected ? (
              <>
                <Tooltip title="Add to Playlist">
                  <Button
                    variant="dark"
                    className="p-1! max-sm:p-0.5!"
                    onClick={() =>
                      setToast({
                        show: true,
                        title: "Info",
                        description: "Music added to playlist.",
                        type: "info",
                      })
                    }
                  >
                    <RiPlayListAddFill className="text-lg max-sm:text-xs" />
                  </Button>
                </Tooltip>
                <Tooltip title="Add to Queue">
                  <Button
                    variant="dark"
                    className="p-1! max-sm:p-0.5!"
                    onClick={() =>
                      setToast({
                        show: true,
                        title: "Info",
                        description: "Music added to queue.",
                        type: "info",
                      })
                    }
                  >
                    <MdQueue className="text-lg max-sm:text-xs" />
                  </Button>
                </Tooltip>
                <Tooltip title="Remove">
                  <Button
                    variant="primary"
                    className="p-1! max-sm:p-0.5!"
                    onClick={() =>
                      setToast({
                        show: true,
                        title: "Remove",
                        description: "Successfully remove music.",
                        type: "error",
                      })
                    }
                  >
                    <IoMdTrash className="text-lg max-sm:text-xs" />
                  </Button>
                </Tooltip>
              </>
            ) : null}
          </div>
        </td>
      </tr>
    </>
  );
}
