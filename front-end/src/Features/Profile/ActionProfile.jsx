import { findProfile } from "../api"; 
import { ALL_PROFILE_DATA } from "./ReducerProfile";

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