import { configureStore } from "@reduxjs/toolkit"
import fruitReducer from "./reducer/fruit-reducer"

const store = configureStore ({

    reducer : {
        fruit: fruitReducer
    },

    devTools : process.env.NODE_ENV !== 'production'
})  

export default store;