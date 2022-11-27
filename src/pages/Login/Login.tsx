import "./Login.scss";
import authService from "../../services/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/Card/Card";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [searchParams] = useSearchParams();
  const nav = useNavigate();

  const handleOnLogin = async (e: React.FormEvent<any>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await authService.login(username, password);
      window.location.reload();
    } catch (exception) {
      setErrorMessage("Wrong credentials");
    } finally {
      setLoading(false);
    }
  };

  const fromSignedUp = searchParams.get("s");

  return (
    <Card title="Login">
      <form className="Login" onSubmit={(e) => handleOnLogin(e)}>
        {fromSignedUp && <div className="Login__successMessage">Your successfully signed up, you can now log in</div>}
        <label>
          Username
          <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name="username" />
        </label>
        <label>
          Password
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" />
        </label>
        <div className="error">{errorMessage}</div>
        <button disabled={loading}>Log In</button>
      </form>

      <div className="Login__noAccount">
        Don't have an account yet? <a href="/signup">Sign Up</a>
      </div>
    </Card>
  );
}
