import { AudioMetadata } from "./AudioMetadata";

export type Actions =
  | { type: "ADD_MUSIC"; payload: AudioMetadata }
  | { type: "INCREASE_MUSIC_INDEX" }
  | { type: "DECREASE_MUSIC_INDEX" }
  | { type: "SET_MUSIC_INDEX"; payload: number }
  | { type: "TOGGLE_PLAYING_MUSIC" }
  | { type: "PLAY_MUSIC" }
  | { type: "PAUSE_MUSIC" }
  | { type: "TOGGLE_SHUFFLE" }
  | { type: "CYCLE_REPEAT" }
  | { type: "SET_VOLUME"; payload: number }
  | { type: "SET_CURRENT_TIME"; payload: number };
