import axios from "./axiosConfig";

interface AuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export const login = async (): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(
    `${import.meta.env.VITE_AUTH0_DOMAIN}/oauth/token`,
    {
      grant_type: "client_credentials",
      client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
      client_secret: import.meta.env.VITE_AUTH0_CLIENT_SECRET,
      audience: import.meta.env.VITE_AUTH0_AUDIENCE,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
