export const incrementAction = () => dispatch => {
  dispatch({
    type: "INC",
    payload: 10
  });
};

export const decrementAction = () => dispatch => {
  dispatch({
    type: "DEC",
    payload: 10
  });
};
