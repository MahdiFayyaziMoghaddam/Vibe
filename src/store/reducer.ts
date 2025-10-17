import { Actions } from "@/types/Actions";
import { States } from "@/types/States";

export const StateReducer: (state: States, action: Actions) => States = (
  state,
  action
) => {
  switch (action.type) {
    case "INCREASE_MUSIC_INDEX": {
      if (state.allMusics.length > 0) {
        if (state.musicIndex === state.allMusics.length - 1) {
          state.musicIndex = 0;
        } else {
          state.musicIndex = state.musicIndex + 1;
        }
        return {
          ...state,
          musicIndex: state.musicIndex,
        };
      }
      return state;
    }

    case "DECREASE_MUSIC_INDEX": {
      if (state.allMusics.length > 0) {
        if (state.musicIndex === 0) {
          state.musicIndex = state.allMusics.length - 1;
        } else {
          state.musicIndex = state.musicIndex - 1;
        }
        return {
          ...state,
          musicIndex: state.musicIndex,
        };
      }
      return state;
    }

    case "SET_MUSIC_INDEX": {
      if (state.allMusics.length > 0 && state.allMusics[action.payload]) {
        return {
          ...state,
          musicIndex: action.payload,
        };
      }
      return state;
    }

    case "ADD_MUSIC": {
      const isRepeated = state.allMusics.findIndex(
        (music) => music.title === action.payload.title
      );

      // prevent adding duplicate music
      if (isRepeated < 0) {
        if (state.allMusics.length === 0) {
          return {
            ...state,
            allMusics: [...state.allMusics, action.payload],
          };
        } else {
          state.allMusics.push(action.payload);
          return {
            ...state,
          };
        }
      } else {
        return state;
      }
    }

    case "TOGGLE_PLAYING_MUSIC": {
      if (state.allMusics.length > 0) {
        return {
          ...state,
          isPlaying: !state.isPlaying,
        };
      }
      return state;
    }

    case "PLAY_MUSIC": {
      if (state.allMusics.length > 0) {
        return {
          ...state,
          isPlaying: true,
        };
      }
      return state;
    }

    case "PAUSE_MUSIC": {
      if (state.allMusics.length > 0) {
        return {
          ...state,
          isPlaying: false,
        };
      }
      return state;
    }

    case "TOGGLE_SHUFFLE": {
      return {
        ...state,
        shuffle: !state.shuffle,
      };
    }

    case "CYCLE_REPEAT": {
      if (state.repeat === "none") {
        state.repeat = "one";
      } else if (state.repeat === "one") {
        state.repeat = "all";
      } else {
        state.repeat = "none";
      }

      return {
        ...state,
        repeat: state.repeat,
      };
    }

    case "SET_VOLUME": {
      if (!(action.payload > 100 || action.payload < 0)) {
        return {
          ...state,
          preVolume: state.volume === 0 ? state.preVolume : state.volume,
          volume: action.payload,
        };
      }
      return state;
    }

    case "SET_CURRENT_TIME": {
      if (state.allMusics.length > 0) {
        return {
          ...state,
          currentTime: action.payload,
        };
      }
      return state;
    }

    default:
      return state;
  }
};
