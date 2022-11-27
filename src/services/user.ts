import api from "./api";

const update = (userId: number, email: string) => {
  return api.put("/auth/users/" + userId, {
    email,
  });
};

const userService = {
  update,
};

export default userService;
