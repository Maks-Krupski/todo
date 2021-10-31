import { ADD_TASK, FILTER_TASK, LOAD_TASK, REMOVE_TASK } from "../actions/tasksActions";

const initialState = { tasks: [] };

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: state.tasks.length + 1, title: action.payload }],
      };
    case REMOVE_TASK:
      return { ...state, tasks: action.payload };
    case FILTER_TASK:
      return { ...state, tasks: action.payload };
    case LOAD_TASK:
      return { ...state, tasks: [...action.payload] };
    default:
      return state;
  }
};
