import * as actions from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case actions.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case actions.LOAD_COURSES_SUCCESS:
      return action.courses;
    case actions.UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    default:
      return state;
  }
}
