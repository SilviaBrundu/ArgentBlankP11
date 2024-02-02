import { createSlice } from "@reduxjs/toolkit";
import { login } from "./ActionLogin";

//Redux utilise un mécanisme appelé « reducers » pour gérer les mises à jour de l'état. 
//Ce sont des fonctions qui vont produire un nouveau “state”

// J'initialise le state a null
const initialState = {
    token: null,
    error: null,
};

// permet d'organiser l'état en morceaux autonomes et gérables, 
// facilitant la création et la maintenance de l'application

// Je créer un slice que je nomme profile qui va permettre 
const loginSlice = createSlice({
    name: "profile", 
    initialState,
    //cleanToken va me permettre de réinitialiser le token a null
    reducers: {
        cleanToken: (state) => {
        state.token = null;
    },
    },

    // extraReducers est un objet de configuration qui permet de définir des reducer supplémentaires 
    //qui répondent aux actions générées par d'autres parties de votre application telles que des thunks 
    //ou d'autres slice.

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

