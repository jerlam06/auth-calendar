import { useEffect, useState } from "react";
import AuthService from "../services/auth";

export default function useAuth(): [user: User | undefined, logOut: () => void] {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser() || undefined);
  console.log("useAuth");

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();

    setCurrentUser(undefined);
  };

  return [currentUser, logOut];
}
