import axios from "axios";
import {
  GET_ERRORS,
  GET_BACKLOG,
  GET_ITEM_TASK,
  DELETE_ITEM_TASK,
} from "./types";

export const addItemTask = (backlog_id, item_task, history) => async (
  dispatch
) => {
  try {
    await axios.post(`/api/backlog/${backlog_id}`, item_task);
    history.push(`/itemBoard/${backlog_id}`);
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

export const getBacklog = (backlog_id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/backlog/${backlog_id}`);
    dispatch({
      type: GET_BACKLOG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getItemTask = (backlog_id, it_id, history) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/backlog/${backlog_id}/${it_id}`);
    dispatch({
      type: GET_ITEM_TASK,
      payload: res.data,
    });
  } catch (err) {
    history.push("/dashboard");
  }
};

export const updateItemTask = (backlog_id, it_id, item_task, history) => async (
  dispatch
) => {
  try {
    await axios.patch(`/api/backlog/${backlog_id}/${it_id}`, item_task);
    history.push(`/itemBoard/${backlog_id}`);
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

export const deleteItemTask = (backlog_id, it_id) => async (dispatch) => {
  if (
    window.confirm(
      `You are deleting project task ${it_id}, this action cannot be undone`
    )
  ) {
    await axios.delete(`/api/backlog/${backlog_id}/${it_id}`);
    dispatch({
      type: DELETE_ITEM_TASK,
      payload: it_id,
    });
  }
};
