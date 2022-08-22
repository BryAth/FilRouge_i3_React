import { createReducer } from "@reduxjs/toolkit";
import { addFruit, clearFruit, expirFruit, removeFruit } from "../actions/fruit-actions";


const initialState = {
    fruits : [],
    msg : 'Itinial'
};


const fruitReducer = createReducer(initialState,(builder ) => {
    builder
        .addCase(addFruit , (state,action) => {
            state.fruits.push(action.payload);
            state.msg = 'Add';
        })
        .addCase(removeFruit,(state,action) =>{
            const fruitId = action.payload;


            // Recherche de l'index et suppresion 
            const targetIndex = state.fruits.findIndex(f => f.id === fruitId)
            state.fruits.splice(targetIndex,1)

            })
        .addCase(expirFruit , (state,action) => {
            const fruitId = action.payload
            const targetIndex = state.fruits.findIndex(f => f.id === fruitId)
            state.fruits[targetIndex].expire = true;
        })
        .addCase(clearFruit,(state) => {
            state.fruits = [];
            state.msg = 'Clear';
        })
});

export default fruitReducer