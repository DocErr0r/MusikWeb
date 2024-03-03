import { reducerCase } from "./constants";

export const intialState = {
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCase.SET_TOKEN:
      return{...state,token:action.token}
    default:
      return state;
  }
};
export default reducer;
