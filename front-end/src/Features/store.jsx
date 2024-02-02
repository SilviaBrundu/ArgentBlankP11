import { configureStore } from "@reduxjs/toolkit";
import ReducerLogin from "./Login/ReducerLogin";
import ReducerProfile from "./Profile/ReducerProfile";

//on va stocker toutes les données dont on a besoin dans un seul « store », 
//qui peut être partagé entre tous les composants de l'application

const store = configureStore({
  //Le state est stocké sous la forme d'un objet javascrip dans le store
  reducer: {
    login: ReducerLogin,
    user: ReducerProfile,
  },
});

export default store;