// import {createStore} from "redux"

// // Initial State
// const initialState = {
//     user: {
//         username: "Syed Ibrahim",
//         balance: 50000,
//     },
// };

// // Action State
// export const addMoney = (amt) => ({
//     type: "addMoney",
//     payload: amt,
// });

// export const removeMoney = (amt) => ({
//     type: "removeMoney",
//     payload: amt,
// });

// // Reduce State
// function reducer(state = initialState, Action) {
//     switch(Action.type) {
//         case "addMoney":
//             return {
//                 user: {
//                     username: state.user.username, 
//                     balance: state.user.balance + Action.payload,
//                 },
//             };
//         case "removeMoney":
//             return {
//                 user: {
//                     username: state.user.username,
//                     balance: state.user.balance - Action.payload,
//                 },
//             };
//         default:
//             return state;       
//     }
// }

// const store = createStore(reducer);

// export default store;

// Modern React Toolkit

import {configureStore, createSlice} from "@reduxjs/toolkit"
const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "Ibbu",
        balance: 200000,
    },
    reducers: {
        addMoney: (state, action) => {
            state.balance += action.payload; 
        },
        removeMoney: (state, action) => {
            state.balance -= action.payload;
        }
    },
});

export const {addMoney, removeMoney} = userSlice.actions;
const store = configureStore({
    reducer: {user: userSlice.reducer},
});
export default store;