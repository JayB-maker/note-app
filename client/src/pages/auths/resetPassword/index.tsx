import { useState } from "react";
import { Button, Input } from "../../../components/ui";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const [useEmail, setUseEmail] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/verification/");
  };
  return (
    <>
      <div className="container">
        <div className="login-section">
          <div className="login-container">
            <h3>Get your access back</h3>
            <p className="type2">
              Enter your registered{" "}
              <span>{useEmail ? "email" : "phone number"}</span>
            </p>
            <form className="form">
              <>
                <Input
                  label="Email Address"
                  placeholder="Enter Email Address"
                  id="login"
                  onChange={(e: any) => console.log(e)}
                />
                <Button
                  text="Recover Password"
                  className="login-button"
                  onClick={handleSubmit}
                />
              </>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
