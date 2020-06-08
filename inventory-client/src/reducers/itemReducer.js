import { GET_ITEMS, GET_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    case GET_ITEM:
      return {
        ...state,
        item: action.payload,
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(
          (item) => item.itemIdentifier !== action.payload
        ),
      };

    default:
      return state;
  }
}
