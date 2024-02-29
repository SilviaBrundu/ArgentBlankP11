export const ALL_PROFILE_DATA = "ALL_PROFILE_DATA";

const initialState = {
    username: "",
    firstname: "",
    lastname: "",
};

const ReducerProfile = (state = initialState, action) => {
    // les actions sont de simple objet javascript qui ont une clef type
    // on regarde le type de cette action
    switch (action.type) {
        //dans le cas ou je récupère les données du profil
        case ALL_PROFILE_DATA:
            return {
                // a partir du state
                ...state,
                // j'ajoute toute les infos du profile qui sera passé dans le payload de l'action 
                // qui est la deuxieme clef de notre action
                username: action.payload.username,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
            };
        default:
            //et on retourne le nouveau state
            return state;
    }
};

export default ReducerProfile;