import api from "./api";
import TokenService from "./token";

// Test User:
// username: atuny0
// pw: 9uQFF1Lh
// token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY2OTQwNTQyMiwiZXhwIjoxNjY5NDA5MDIyfQ.JruLSLacHDpDS21IztL69qdT6Y7qKpD0wnt_kb0oyh0

const register = (username: string, email: string, password: string) => {
  return api.post("/users/add", {
    username,
    email,
    password,
  });
};

const login = (username: string, password: string) => {
  return api
    .post("/auth/login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        TokenService.setUser(response.data);
      }

      return response.data;
    });
};

const logout = () => {
  TokenService.removeUser();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user") as string);
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authService;
