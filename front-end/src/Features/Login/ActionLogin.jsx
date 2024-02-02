import { findLogin } from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

//CreateAsyncThunk est l'endroit où nous effectuons des tâches asynchrones dans notre tranche. 
//Il reçoit deux paramètres le nom de slice "profile" / de l'action "login"
export const login = createAsyncThunk(
    "profile/login",
    async ({ email, password }) => {
        try {
            //je créer une variable token ou je met ma fonction findLogin avec
            //en propos email et password pour return le token
            const token = findLogin({ email, password });
            return token;
        } catch (error) {
        throw error;
        }
    }
);