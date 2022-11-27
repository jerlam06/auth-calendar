import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./PageLayout.scss";

interface PageLayoutProps {
  children: ReactNode;
  user: User | undefined;
  logOut: () => void;
}

const navLoggedOut = [
  {
    title: "Log In",
    path: "/login",
  },
  {
    title: "Sign Up",
    path: "/signup",
  },
];

const navLoggedIn = [
  {
    title: "Calendar",
    path: "/calendar",
  },
  {
    title: "Profile",
    path: "/profile",
  },
];

export default function PageLayout({ user, children, logOut }: PageLayoutProps) {
  const links = user ? navLoggedIn : navLoggedOut;

  return (
    <div className="PageLayout">
      <header>
        <div className="PageLayout__headerContent">
          <img className="PageLayout__logo" src="/vite.svg" alt="Logo" />
          <h1 className="PageLayout__title">Calendy</h1>
          <nav>
            <ul>
              {links.map((link) => (
                <li key={link.title}>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
              {user && (
                <li>
                  <a href="" onClick={logOut}>
                    Log Out
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
