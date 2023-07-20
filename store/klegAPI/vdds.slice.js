import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vdd_list = createAsyncThunk(
  "vdds/api_v1_vdd_list",
  async payload => {
    const response = await apiService.api_v1_vdd_list(payload)
    return response.data
  }
)
export const api_v1_vdd_create = createAsyncThunk(
  "vdds/api_v1_vdd_create",
  async payload => {
    const response = await apiService.api_v1_vdd_create(payload)
    return response.data
  }
)
export const api_v1_vdd_retrieve = createAsyncThunk(
  "vdds/api_v1_vdd_retrieve",
  async payload => {
    const response = await apiService.api_v1_vdd_retrieve(payload)
    return response.data
  }
)
export const api_v1_vdd_update = createAsyncThunk(
  "vdds/api_v1_vdd_update",
  async payload => {
    const response = await apiService.api_v1_vdd_update(payload)
    return response.data
  }
)
export const api_v1_vdd_partial_update = createAsyncThunk(
  "vdds/api_v1_vdd_partial_update",
  async payload => {
    const response = await apiService.api_v1_vdd_partial_update(payload)
    return response.data
  }
)
export const api_v1_vdd_destroy = createAsyncThunk(
  "vdds/api_v1_vdd_destroy",
  async payload => {
    const response = await apiService.api_v1_vdd_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vddsSlice = createSlice({
  name: "vdds",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_vdd_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vdd_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_vdd_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vdd_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vdd_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_vdd_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vdd_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vdd_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_vdd_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vdd_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vdd_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vdd_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vdd_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vdd_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vdd_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vdd_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vdd_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vdd_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_vdd_list,
  api_v1_vdd_create,
  api_v1_vdd_retrieve,
  api_v1_vdd_update,
  api_v1_vdd_partial_update,
  api_v1_vdd_destroy,
  slice: vddsSlice
}
