import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import data from "./data";
import { API_VERSION3, BASE_URL, TOKEN } from "app/configs/settingsConfig";

export const getWidgets = createAsyncThunk("analyticsDashboardApp/widgets/getWidgets", async () => {
  //const response = await axios.get('/api/dashboards/analytics/widgets');

  //  const data = await response.data;

  return data;
});

export const getVariables = createAsyncThunk("analyticsDashboardApp/widgets/getVariables", async () => {
  const response = await axios.get(BASE_URL + API_VERSION3 + "/back/variables", {
    headers: { Authorization: TOKEN },
  });
  const data = await response.data;
  return data;
});

const widgetsSlice = createSlice({
  name: "analyticsDashboardApp/widgets",
  initialState: null,
  reducers: {},
  extraReducers: {
    [getWidgets.fulfilled]: (state, action) => action.payload,
    [getVariables.fulfilled]: (state, action) => {
      state.variables = action.payload;
    },
  },
});

export const selectWidgets = ({ analyticsDashboardApp }) => analyticsDashboardApp.widgets;

export default widgetsSlice.reducer;
