import { createSlice } from "@reduxjs/toolkit";
import { tasksReducer } from "../../reducers/tasksReducer";

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [] },
  reducers: { tasksReducer },
});
