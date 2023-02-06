import { Button, Input, InputPassword } from "../../../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Signup = () => {
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="container">
      <div className="login-container">
        <div className="heading">
          <h3>Welcome to Dropper!</h3>
          <p className="type2">Let’s get you started</p>
        </div>
        <form>
          <Input placeholder="Enter full name" label="Full Name" />
          <Input placeholder="Enter email address" label="Email Address" />
          <InputPassword
            placeholder="Enter password"
            label="Create Password"
            onChange={setPassword}
          />
          <Button text="Register" className="login-button" />
        </form>
        <p className="type2">
          Already have an acoount?{" "}
          <Link
            style={{ color: "#ffffff", textDecoration: "underline" }}
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
      </div>
    </>
  );
};

export default Signup;
