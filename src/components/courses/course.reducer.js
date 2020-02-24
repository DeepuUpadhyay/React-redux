import { registerReducer } from "../../redux/configureStore";

const initialState = {};

export const courseReducer = (state = initialState, action) => {
 switch (action.type) {
  case "CREATE_COURSE":
   return { ...state, title: action.title };
  default:
   return state;
 }
};

registerReducer("course", courseReducer);
