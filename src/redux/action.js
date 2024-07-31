import { v4 as uuid } from "uuid";

export const ADD_USER = "ADD_USER";
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";

export const addUserAction = (value) => (dispatch, getState) => {
  const { users } = getState(); // Get current state
  const exists = users.some(user => user.email === value.email);

  if (!exists) {
    dispatch({
      type: ADD_USER,
      payload: {
        ...value,
        id: uuid(),
      },
    });
  } 
  else {
    console.log(`User with email ${value.email} already exists.`);
  }
};

export const editUserAction = (value) => ({
  type: EDIT_USER,
  payload: value,
});

export const deleteUserAction = (id) => ({
  type: DELETE_USER,
  payload: id,
});