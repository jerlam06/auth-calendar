const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  return user?.token;
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("user") as string);
};

const setUser = (user: User) => {
  console.log(JSON.stringify(user));
  localStorage.setItem("user", JSON.stringify(user));
};

const removeUser = () => {
  localStorage.removeItem("user");
};

const TokenService = {
  getLocalAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default TokenService;
