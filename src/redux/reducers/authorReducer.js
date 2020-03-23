import * as actions from "../actions/actionTypes";

export default function authorReducer(state = [], action) {
  switch (action.type) {
    case actions.CREATE_AUTHOR:
      return [...state, { ...action.author }];
    case actions.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
