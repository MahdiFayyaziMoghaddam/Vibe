"use client";
import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import { TbRepeat, TbRepeatOff, TbRepeatOnce } from "react-icons/tb";
import { useAppState } from "@/contexts/StateContext";

export default function Repeat() {
  const { state, dispatch } = useAppState();

  return (
    <Button
      variant="icon"
      className={`rounded-sm! p-1! max-md:p-0.5! *:text-xl max-md:*:text-lg max-sm:*:text-sm ${
        state.repeat === "none" ? "" : "text-primary"
      }`}
      title={`Repeat ${
        state.repeat === "none" ? "off" : state.repeat === "all" ? "all" : "one"
      }`}
      onClick={() => dispatch({ type: "CYCLE_REPEAT" })}
    >
      {state.repeat === "all" ? (
        <TbRepeat strokeWidth={1.65} />
      ) : state.repeat === "one" ? (
        <TbRepeatOnce strokeWidth={1.65} />
      ) : (
        <TbRepeatOff strokeWidth={1.65} />
      )}
    </Button>
  );
}
