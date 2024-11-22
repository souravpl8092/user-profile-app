import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  EDIT_USER,
  DELETE_USER,
  TOGGLE_LIKE_USER,
} from "./actiontypes";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id
            ? { ...user, ...action.payload.updatedUser }
            : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case TOGGLE_LIKE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload ? { ...user, liked: !user.liked } : user
        ),
      };
    default:
      return state;
  }
};

export default reducer;
