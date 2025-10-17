"use client";
import React, { useActionState, useEffect, useRef, useState } from "react";
import Button from "../../atoms/Button/Button";
import { IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeMute } from "react-icons/io";
import Slider from "../../atoms/Slider/Slider";
import { useAppState } from "@/contexts/StateContext";

export default function Volume() {
  const { state, dispatch } = useAppState();
  const volume = state.volume;
  const prevVolume = state.preVolume;

  return (
    <div className={`relative flex items-center`}>
      <Button
        variant="icon"
        className="rounded-sm! p-1! max-md:p-0.5! *:text-xl max-md:*:text-lg max-sm:*:text-sm volume-btn"
        onClick={() => {
          if (volume === 0) {
            dispatch({ type: "SET_VOLUME", payload: prevVolume });
          } else {
            dispatch({ type: "SET_VOLUME", payload: 0 });
          }
        }}
      >
        {volume === 0 ? (
          <IoMdVolumeMute />
        ) : volume < 50 ? (
          <IoMdVolumeLow />
        ) : (
          <IoMdVolumeHigh />
        )}
      </Button>
      <Slider
        max={100}
        value={volume}
        step={5}
        onChange={(v) => dispatch({ type: "SET_VOLUME", payload: v })}
        className="absolute w-12! max-lg:w-9! max-md:w-9! max-sm:w-5! h-0 top-[14px] left-[38px] max-lg:left-[33px] max-md:top-[11px] max-md:left-[28px] max-sm:top-[9px] max-sm:left-[20px] volume-slider"
      />
    </div>
  );
}
