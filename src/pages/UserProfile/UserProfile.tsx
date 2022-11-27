import { useState } from "react";
import Card from "../../components/Card/Card";
import userService from "../../services/user";
import "./UserProfile.scss";

export default function UserProfile({ user }: { user: User | undefined }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(user?.email);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnUpdate = async () => {
    if (loading) return;
    if (!email) {
      setErrorMessage("Email cannot be empty");
      return;
    }
    setLoading(true);

    try {
      await userService.update(user?.id as number, email);
      window.location.reload();
    } catch (exception) {
      // TODO
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Profile">
      <div className="UserProfile">
        <label>
          <span className="UserProfile__labelText">Username</span>
          <input disabled value={user?.username} type="text" name="username" />
        </label>
        <label>
          <span className="UserProfile__labelText">Email</span>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" />
        </label>
        <label>
          <span className="UserProfile__labelText">Password</span>
          <button disabled>Change password</button>
        </label>
        <div className="error">{errorMessage}</div>

        {user?.email !== email && (
          <button onClick={handleOnUpdate} className="UserProfile__saveButton">
            Save Changes
          </button>
        )}
      </div>
    </Card>
  );
}
