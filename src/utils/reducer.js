import { reducerCase } from "./constants";

export const intialState = {
  token: null,
  playlists: [],
  slectedplaylistID: '37i9dQZF1DWZNJXX2UeBij',
  selectedPlaylist: null,
  profile: null,
  songid: null,
};

const reducer = (state=intialState, action) => {
  switch (action.type) {
    case reducerCase.SET_TOKEN:
      return { ...state, token: action.token }
    case reducerCase.SET_PLAYLIST:
      return { ...state, selectedPlaylist: action.payload }
    case reducerCase.SET_PLAYLISTS:
      return { ...state, playlists: action.payload }
    case reducerCase.SET_PROFILE:
      return { ...state, profile: action.profile }
    case reducerCase.SET_SONG:
      return { ...state, songid: action.payload }
    default:
      return state;
  }
};
export default reducer;
