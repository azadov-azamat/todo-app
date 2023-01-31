import {configureStore} from "@reduxjs/toolkit"
import reducer from "./reducer"

const store = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: true
        })
    }
})

export {store}