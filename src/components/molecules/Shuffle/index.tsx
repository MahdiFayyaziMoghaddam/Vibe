import Button from "@/components/atoms/Button/Button";
import { useAppState } from "@/contexts/StateContext";
import React from "react";
import { TbArrowsShuffle } from "react-icons/tb";

export default function Shuffle() {
  const { state, dispatch } = useAppState();
  return (
    <Button
      variant="icon"
      className={`rounded-sm! p-1! max-md:p-0.5! *:text-xl max-md:*:text-lg max-sm:*:text-sm ${
        state.shuffle ? "text-primary" : ""
      }`}
      title={`Shuffle ${state.shuffle ? "on" : "off"}`}
      onClick={() => dispatch({ type: "TOGGLE_SHUFFLE" })}
    >
      <TbArrowsShuffle />
    </Button>
  );
}
