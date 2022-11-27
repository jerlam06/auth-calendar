import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes({ user }: { user: User | undefined }) {
  return user ? <Outlet /> : <Navigate to="/login" />;
}
