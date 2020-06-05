import axios from "axios";
import { GET_ERRORS, GET_ITEMS } from "./types";

export const createItem = (item, history) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/api/item", item);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getItems = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/api/item/all");
  dispatch({
    type: GET_ITEMS,
    payload: res.data,
  });
};
