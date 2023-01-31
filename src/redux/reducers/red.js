import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const createTodo = createAsyncThunk("red/createTodo", async (data) => {
    return data
})

export const updateTodo = createAsyncThunk("red/updateTodo", async (data) => {
    return data
})

export const deleteTodoById = createAsyncThunk("red/deleteTodoById", async (data) => {
    return data
})

export const readTodo = createAsyncThunk("auth/readTodo", async () => {
    return JSON.parse(localStorage.getItem("DATA"))
})

export const byId = createAsyncThunk("auth/byId", async (data) => {
    return data
})

export const redSlice = createSlice({
    name: 'red',
    initialState: {
        todoList: [],
        byId: null,
        isLoading: false
    },
    reducers: {},
    extraReducers: {
        [createTodo.fulfilled]: (state, action) => {
            const data = {
                id: action.meta.requestId,
                status: false,
                text: action.payload.text
            }
            state.todoList?.push(data)
            localStorage.setItem("DATA", JSON.stringify(state.todoList))
            state.isLoading = false
        },
        [createTodo.pending]: (state) => {
            state.isLoading = true
        },

        [byId.fulfilled]: (state, action) => {
            state.byId = action.payload
        },

        [updateTodo.fulfilled]: (state, action) => {
            const currentData = action.payload
            const data = {
                id: currentData?.id,
                status: !currentData?.status,
                text: currentData?.text
            }
            const array = JSON.parse(localStorage.getItem("DATA"))
            array.splice(array.findIndex(a => a.id === data.id), 1)
            array.push(data)
            localStorage.setItem("DATA", JSON.stringify(array))
            state.todoList = array
            state.byId = null
            state.isLoading = false
        },
        [updateTodo.pending]: (state) => {
            state.isLoading = true
        },

        [readTodo.fulfilled]: (state, action) => {
            if (action.payload !== null) {
                state.todoList = action.payload
            }
            state.isLoading = false
        },
        [readTodo.pending]: (state) => {
            state.isLoading = true
        },

        [deleteTodoById.fulfilled]: (state, action) => {
            const data = action.payload
            const array = JSON.parse(localStorage.getItem("DATA"))
            array.splice(array.findIndex(a => a.id === data.id), 1)
            localStorage.setItem("DATA", JSON.stringify(array))
            state.todoList = array
            state.isLoading = false
        },
        [deleteTodoById.pending]: (state) => {
            state.isLoading = true
        }
    }
})

export const {} = redSlice.actions

export default redSlice.reducer