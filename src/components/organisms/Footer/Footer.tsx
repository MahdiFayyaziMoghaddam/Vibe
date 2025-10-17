"use client";
import React, { useRef } from "react";
import Button from "../../atoms/Button/Button";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { IoPause, IoPlay } from "react-icons/io5";
import Menu from "../../atoms/Menu/Menu";
import Slider from "../../atoms/Slider/Slider";
import { FaComputer, FaLink } from "react-icons/fa6";
import Volume from "../../molecules/Volume/Volume";
import Repeat from "../../molecules/Repeat/Repeat";
import Image from "@/components/atoms/Image/Image";
import { useAppState } from "@/contexts/StateContext";
import FileInput from "@/components/atoms/Input/FileInput";
import Shuffle from "@/components/molecules/Shuffle";
import durationFormatter from "@/utils/durationFormatter";

export default function Footer() {
  const { state, dispatch, audio } = useAppState();
  const inputRef = useRef<HTMLInputElement>(null);
  const music = state.allMusics[state.musicIndex];

  return (
    <>
      {/* {isShowImportModal ? <URLImportModal /> : null} */}
      <div className="flex justify-between items-center bg-dark-800 border-t-1 border-t-dark-400 py-[0.6rem] shrink-0 px-7 max-md:px-3 max-sm:px-1">
        <Button
          variant="icon"
          className="hover:bg-dark-400/30! cursor-pointer rounded-md p-1.5! max-lg:p-[5px]! max-md:p-[3px]!"
          title={music?.title || "Music Title"}
        >
          <div
            className={`bg-transparent flex items-center gap-2 max-lg:gap-1.5 max-md:gap-1 rounded-sm max-md:rounded-xs w-auto min-w-35 max-w-49 max-lg:min-w-30 max-lg:max-w-44 max-md:min-w-21 max-md:max-w-33 max-sm:w-auto`}
          >
            <Image
              className="w-[3rem] max-lg:size-[2.7rem]! max-md:size-[2.4rem]! max-sm:size-[2.1rem]! aspect-square rounded-[0.2rem] border-1 border-dark-400"
              src={music?.image || ""}
              alt={music?.title || "Music Title"}
            />
            <div className="flex flex-col grow max-sm:hidden">
              <p className="text-[0.95rem] text-dark-200 line-clamp-1 max-lg:text-[0.85rem] max-md:text-[0.75rem] max-sm:text-[0.65rem]">
                {music?.title || "Music Title"}
              </p>
              <p className="text-[0.75rem] text-dark-200/60 line-clamp-1 max-lg:text-[0.65rem] max-md:text-[0.55rem] max-sm:text-[0.45rem]">
                {music?.artists || "Music Artist"}
              </p>
            </div>
          </div>
        </Button>
        <div className="flex flex-col gap-3 justify-self-center justify-center items-center max-md:gap-2 max-sm:gap-1">
          <div className="flex items-center gap-2.5 max-lg:gap-2 max-md:gap-1">
            <p className="text-[0.7rem] text-dark-200">
              {durationFormatter(state.currentTime)}
            </p>
            <Slider
              className="w-[30rem]! max-lg:w-[23rem]! max-md:w-[18rem]! max-sm:w-[14rem]!"
              max={music?.duration || 1}
              value={state.currentTime}
              onChange={(v) => {
                if (music) {
                  dispatch({ type: "SET_CURRENT_TIME", payload: v });
                  audio.currentTime = v;
                }
              }}
              formattedLabel
            />
            <p className="text-[0.7rem] text-dark-200">
              {durationFormatter(music?.duration || 0)}
            </p>
          </div>

          <div className="flex items-center gap-4 max-md:gap-2.5 max-sm:gap-1.5">
            <Shuffle />
            <Repeat />
            <Button
              variant="icon"
              className="rounded-sm! p-1! max-md:p-0.5! *:text-xl max-md:*:text-lg max-sm:*:text-sm"
              onClick={() => dispatch({ type: "DECREASE_MUSIC_INDEX" })}
            >
              <IoMdSkipBackward />
            </Button>
            <Button
              variant="icon"
              className="rounded-sm! p-0.5! *:text-3xl max-md:*:text-2xl max-sm:*:text-xl"
              onClick={() => dispatch({ type: "TOGGLE_PLAYING_MUSIC" })}
            >
              {state.isPlaying ? <IoPause /> : <IoPlay />}
            </Button>
            <Button
              variant="icon"
              className="rounded-sm! p-1! max-md:p-0.5! *:text-xl max-md:*:text-lg max-sm:*:text-sm"
              onClick={() => dispatch({ type: "INCREASE_MUSIC_INDEX" })}
            >
              <IoMdSkipForward />
            </Button>
            <Volume />
          </div>
        </div>
        <div className="flex justify-end w-auto">
          <Menu
            className="mb-2 -mr-8 w-auto! text-[1.1rem] max-lg:text-[0.9rem] max-lg:-mr-8 max-md:text-[0.7rem] max-md:-mr-2 max-sm:text-[0.5rem] max-sm:-mr-0 max-sm:mb-1"
            items={[
              {
                title: "Import with URL",
                icon: <FaLink />,
                // onClick: () => setIsShowImportModal(true),
              },
              {
                title: "Import From Local",
                icon: <FaComputer />,
                onClick: () => inputRef.current?.click(),
              },
            ]}
          >
            <FileInput
              inputRef={inputRef as React.RefObject<HTMLInputElement>}
            />
            <Button
              variant="primary"
              className="text-sm! max-lg:text-xs! max-md:text-[11px]! max-sm:text-[8px]! text-nowrap px-0! w-28 ml-23 max-lg:w-23 max-lg:ml-22 max-md:w-19 max-md:ml-12 max-sm:w-10 max-sm:ml-0"
            >
              <code>
                Import <code className="max-sm:hidden">Music</code>
              </code>
            </Button>
          </Menu>
        </div>
      </div>
    </>
  );
}
