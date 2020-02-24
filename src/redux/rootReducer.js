const initialState = { username: "khamani" };

export const rootReducer = (state = initialState, action) => {
 switch (action.type) {
  case "UserChanged":
   return { ...state, ...action.username };
  default:
   return state;
 }
};
