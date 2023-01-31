import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const createTodo = createAsyncThunk("auth/createTodo", async (data, {rejectedWithValue}) => {

})

export const updateTodo = createAsyncThunk("auth/updateTodo", async (data, {rejectedWithValue}) => {

})

export const deleteTodoById = createAsyncThunk("auth/deleteTodoById", async (data, {rejectedWithValue}) => {

})

export const readTodo = createAsyncThunk("auth/createTodo", async (data, {rejectedWithValue}) => {

})

export const redSlice = createSlice({
    name: 'red',
    initialState: {
        isLoading: false
    },
    reducers: {},
    extraReducers: {
    }
})

export const {} = redSlice.actions

export default redSlice.reducer