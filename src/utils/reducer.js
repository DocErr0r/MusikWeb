import { reducerCase } from "./constants";

export const intialState = {
  token: null,
  slectedplaylistID: '37i9dQZF1DWZNJXX2UeBij',
  selectedPlaylist: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCase.SET_TOKEN:
      return { ...state, token: action.token }
    case reducerCase.SET_PLAYLIST:
      return { ...state, selectedPlaylist: action.yourSong }
    default:
      return state;
  }
};
export default reducer;
