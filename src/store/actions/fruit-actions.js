// Liste d'actions pour la catégorie "Fruit"

import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid"

//! - Obtenir la liste des fruits
//! - Ajouter un fruit
//! - Supprimer un fruit
//! - Indiquer qu'un fruit est périmé

//! Action créator "oldschool"
// export const addFruit = (fruit) => {
//     return{
//         type : 'fruit/add',
//         payload : {
//             id : nanoid(),
//             ...fruit
//         }
//     };
    
// };
//! Methode oldSchool pour remove
// export const removeFruit = (fruitId) => {
//     return {
//         type :'fruit/remove',
//         payload : fruitId
//     }
// };

//! Action creator "Moderne" avec le redux toolkit 

export const addFruit = createAction('fruit/add',(fruit) => ({
    
        payload : {
            id : nanoid(),
            ...fruit
        }
    
}));

export const removeFruit = createAction('fruit/remove');

export const expirFruit = createAction('fruit/expire');

export const clearFruit = createAction('fruit/clear')


