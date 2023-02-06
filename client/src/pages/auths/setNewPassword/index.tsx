import { Button, InputPassword } from "../../../components/ui";
import { useNavigate } from "react-router-dom";

const SetNewPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/login/");
  };
  return (
    <>
      <div className="container">
        <div className="login-section">
          <div className="login-container">
            <h3>Set new password</h3>
            <p className="type2">
              Set a new password that you won’t forget easily
            </p>
            <form className="form">
              <InputPassword
                label="New password"
                placeholder="Enter New Password"
                id="password"
                onChange={(e: any) => console.log(e)}
              />
              <InputPassword
                label="Confirm new password"
                placeholder="Confirm New Password"
                id="password"
                onChange={(e: any) => console.log(e)}
              />
              <Button
                text="Save new password"
                className="login-button"
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetNewPassword;
