import { States } from "@/types/States";

export const initialStates: States = {
  isPlaying: false,
  allMusics: [],
  musicIndex: 0,
  allFavored: [],
  allQueue: [],
  repeat: "none",
  shuffle: false,
  volume: 100,
  preVolume: 100,
  currentTime: 0,
};
