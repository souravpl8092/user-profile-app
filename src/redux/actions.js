import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  EDIT_USER,
  DELETE_USER,
  TOGGLE_LIKE_USER,
} from "./actiontypes";

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};

// Edit User
export const editUser = (id, updatedUser) => ({
  type: EDIT_USER,
  payload: { id, updatedUser },
});

// Delete User
export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

// Toggle Like User
export const toggleLikeUser = (id) => ({
  type: TOGGLE_LIKE_USER,
  payload: id,
});
