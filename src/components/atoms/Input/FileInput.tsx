"use client";
import { useAppState } from "@/contexts/StateContext";
import { useToast } from "@/contexts/ToastContext";
import getAudioMetadata from "@/utils/getAudioMetadata";
import React, { FormEvent, RefObject } from "react";

export default function FileInput({
  inputRef,
}: {
  inputRef?: RefObject<HTMLInputElement>;
}) {
  const [isLoading, setIsLoading] = React.useState(true);
  const toast = useToast();
  const { state, dispatch } = useAppState();
  const fileInputHandler = async (e: FormEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;
    const { error, metadataList } = await getAudioMetadata(files as FileList);
    if (error || !metadataList) {
      console.log("Failed to load files:", error);
    } else {
      metadataList.forEach((metadata) =>
        dispatch({ type: "ADD_MUSIC", payload: metadata })
      );
    }
  };
  return (
    <input
      className="hidden"
      type="file"
      onInput={fileInputHandler}
      multiple
      accept=".mp3, .m4a, .ogg, .wav"
      ref={inputRef}
    />
  );
}
