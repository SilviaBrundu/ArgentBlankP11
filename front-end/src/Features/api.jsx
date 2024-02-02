import axios from "axios";

//je récupère les données api dont j'ai besoin

//l'email et le mot de passe pour la connexion
export const findLogin = async ({ email, password }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email,
          password,
        }
      );
      //je récupère le token
      return response.data.body.token;
    } catch (error) {
      throw error;
    }
  };

// Je récupérer le profil utilisateur grace au token

export const findProfile = async (token) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.body;
  } catch (error) {
    throw error;
  }
};
