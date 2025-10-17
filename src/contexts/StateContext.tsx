"use client";
import { Dispatch, ReactNode, Ref, useEffect, useReducer, useRef } from "react";
import type { States } from "../types/States";
import type { Actions } from "../types/Actions";
import { createContext, useContextSelector } from "use-context-selector";
import { initialStates, StateReducer } from "@/store";
import { delay } from "@/utils/delay";

interface IStateContext {
  state: States;
  dispatch: Dispatch<Actions>;
  audio: HTMLAudioElement;
}

const StateContext = createContext<IStateContext | undefined>(undefined);

export function StateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(StateReducer, initialStates);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audio = audioRef.current;

  // useEffect(() => {
  //   if (!audio) return;
  //   if (state.repeat === "none") {
  //     audio.onended = () => {
  //       dispatch({ type: "PAUSE_MUSIC" });
  //       console.log("end!");
  //     };
  //   }
  //   console.log("huh?");
  // }, []);
  useEffect(() => {
    if (!audio) return;
    const ctrl = new AbortController();
    if (state.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    audio.addEventListener("timeupdate", (e) => {
      dispatch({
        type: "SET_CURRENT_TIME",
        payload: (e.target as HTMLAudioElement).currentTime,
      });
    }),
      { signal: ctrl.signal };
    return () => ctrl.abort();
  }, [state.isPlaying]);

  useEffect(() => {
    if (!audio) return;
    audio.src = state.allMusics[state.musicIndex]?.url || "#";
    audio.play?.();
    dispatch({ type: "PLAY_MUSIC" });
  }, [state.musicIndex]);

  useEffect(() => {
    if (!audio) return;
    // because initial render occurred at first adding
    audio.src = state.allMusics[0]?.url || "#";
  }, [state.allMusics]);

  useEffect(() => {
    if (!audio) return;
    const ctrl = new AbortController();

    if (state.repeat === "one") {
      audio.loop = true;
    } else if (state.repeat === "all") {
      if (state.allMusics.length > 1) {
        audio.loop = false;
        audio.addEventListener(
          "ended",
          () => {
            dispatch({ type: "INCREASE_MUSIC_INDEX" });
          },
          { signal: ctrl.signal }
        );
      } else {
        audio.loop = true;
      }
    } else {
      audio.loop = false;
      audio.onended = () => dispatch({ type: "PAUSE_MUSIC" });
    }
    return () => ctrl.abort();
  }, [state.currentTime, state.repeat, state.allMusics]);

  useEffect(() => {
    if (!audio) return;
    audio.volume = state.volume / 100;
  }, [state.volume]);

  return (
    <StateContext.Provider
      value={{ state, dispatch, audio: audio as HTMLAudioElement }}
    >
      {children}
      <audio src="#" ref={audioRef as Ref<HTMLAudioElement>}></audio>
    </StateContext.Provider>
  );
}

export const useAppState = () =>
  useContextSelector(StateContext, (ctx) => ctx) as IStateContext;
