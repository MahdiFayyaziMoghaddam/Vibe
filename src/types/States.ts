import { AudioMetadata } from "./AudioMetadata";

export interface States {
  isPlaying: boolean;
  allMusics: AudioMetadata[];
  musicIndex: number;
  allFavored: AudioMetadata[];
  allQueue: AudioMetadata[];
  shuffle: boolean;
  repeat: "none" | "one" | "all";
  volume: number;
  preVolume: number;
  currentTime: number;
}
