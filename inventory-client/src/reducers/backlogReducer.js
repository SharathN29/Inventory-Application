import { GET_BACKLOG, GET_ITEM_TASK, DELETE_ITEM_TASK } from "../actions/types";

const initialState = {
  item_tasks: [],
  item_task: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BACKLOG:
      return {
        ...state,
        item_tasks: action.payload,
      };

    case GET_ITEM_TASK:
      return {
        ...state,
        item_task: action.payload,
      };

    case DELETE_ITEM_TASK:
      return {
        ...state,
        item_tasks: state.item_tasks.filter(
          (item_task) => item_task.itemSequence !== action.payload
        ),
      };

    default:
      return state;
  }
}
