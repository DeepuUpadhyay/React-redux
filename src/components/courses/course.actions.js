export const handleChange = value => dispatch => {
 dispatch({ type: "CREATE_COURSE", title: value });
};
