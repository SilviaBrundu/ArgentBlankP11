import { findProfile, updateUserNameProfile } from "../api";
import { ALL_PROFILE_DATA } from "./ReducerProfile";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const findProfileInfo = (token) => {
    return async (dispatch) => {
        try {
            const userProfile = await findProfile(token);
            const { userName, firstName, lastName } = userProfile;
            dispatch(allDataProfile(userName, firstName, lastName));
        } catch (error) {
            console.error("profile not found", error);
        }
    };
};

// des que j'ai récupérer toute les données je lui passe l'action de type ALL_PROFILE_DATA avec comme payload
// les données pour username firstname et lastname 
export const allDataProfile = (username, firstname, lastname) => {
    return {
        type: ALL_PROFILE_DATA,
        payload: { username, firstname, lastname },
    };
};

export const updateUserUsername = createAsyncThunk(
    "profile/updateUserUsername",
    //get state() permet de mettre a jour l'etat (le nouveau username enregistrer) au niveau du login
    async (updateUsername, { getState }) => {
        const token = getState().login.token;

        try {
            //on attendque la promesse soit resolu
            await updateUserNameProfile(token, updateUsername);
            //et on retourne leresultat (le nouveau username)
            return updateUsername;
        } catch (error) {
            throw error;
        }
    }
);