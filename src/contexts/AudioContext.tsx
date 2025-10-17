"use client";
import { ReactNode, Ref, RefObject, useRef } from "react";
import { createContext, useContextSelector } from "use-context-selector";

const AudioContext = createContext<RefObject<HTMLAudioElement> | null>(null);

interface IAudioProvider {
  children: ReactNode;
}

const AudioProvider = ({ children }: IAudioProvider) => {
  const audioRef: Ref<null | HTMLAudioElement> = useRef(null);
  return (
    <AudioContext.Provider value={audioRef as RefObject<HTMLAudioElement>}>
      <audio src="#" ref={audioRef as RefObject<HTMLAudioElement>}></audio>
      {children}
    </AudioContext.Provider>
  );
};

const useAudio = () => {
  const context = useContextSelector(AudioContext, (ctx) => ctx?.current);
  return context as HTMLAudioElement;
};

export { AudioProvider, useAudio };
