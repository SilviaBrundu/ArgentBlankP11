import { createSlice } from "@reduxjs/toolkit";
import { login } from "./ActionLogin";

//Redux utilise un mécanisme appelé « reducers » pour gérer les mises à jour de l'état. 
//Ce sont des fonctions qui vont produire un nouveau “state”

const initialState = {
    token: null,
    error: null,
};

// Je créer un slice que je nomme profile 
const loginSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        cleanToken: (state) => {
            state.token = null;
        },
    },

    extraReducers: (builder) => {
        builder
            //Chacun de ces types d’actions représente une étape différente du cycle de vie 
            //de l’opération asynchrone effectuée par le thunk (le login):
            //pending : en  attente
            //fulfilled : accomplie
            //rejected : rejeté
            .addCase(login.pending, (state) => {
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.token = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export const { cleanToken } = loginSlice.actions;
export default loginSlice.reducer;

