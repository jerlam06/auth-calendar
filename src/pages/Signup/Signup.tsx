import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import authService from "../../services/auth";
import "../Login/Login.scss";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  const handleOnSignup = async (e: React.FormEvent<any>) => {
    e.preventDefault();
    if (loading) return;
    if (!username || !password || !email) {
      setErrorMessage("You must fill in all the fields");
      return;
    }
    setLoading(true);
    try {
      await authService.register(username, email, password);
      nav("/login?s=t");
    } catch (exception) {
      // TODO
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Signup">
      <form className="Login" onSubmit={(e) => handleOnSignup(e)}>
        <label>
          Username
          <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name="username" />
        </label>
        <label>
          Email
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" />
        </label>
        <label>
          Password
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" />
        </label>
        <div className="error">{errorMessage}</div>
        <button disabled={loading}>Sign Up</button>
      </form>

      <div className="Login__noAccount">
        Already have an account? <a href="/login">Log In</a>
      </div>
    </Card>
  );
}
