import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

// Checks the validity of the user token on every page load, and logs out if not valid
export default function AuthVerifier({ user, logOut }: { user: User | undefined; logOut: () => void }) {
  let location = useLocation();

  useEffect(() => {
    if (user) {
      const decodedJwt = parseJwt(user.token);

      if (decodedJwt.exp * 1000 < Date.now()) {
        logOut();
      }
    }
  }, [location, user]);

  return null;
}
