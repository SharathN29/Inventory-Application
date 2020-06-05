import axios from "axios";
import { GET_ERRORS, GET_ITEMS, GET_ITEM, DELETE_ITEM } from "./types";

export const createItem = (item, history) => async (dispatch) => {
  try {
    await axios.post("/api/item", item);
    history.push("/dashboard");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getItems = () => async (dispatch) => {
  const res = await axios.get("/api/item/all");
  dispatch({
    type: GET_ITEMS,
    payload: res.data,
  });
};

export const getItem = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/item/${id}`);
    dispatch({
      type: GET_ITEM,
      payload: res.data,
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

export const deleteItem = (id) => async (dispatch) => {
  if (
    window.confirm("Are you sure? This will delete the item order entirely.")
  ) {
    await axios.delete(`/api/item/${id}`);
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    });
  }
};
