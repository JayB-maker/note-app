import "./Login.scss";
import { Button, Input, InputPassword } from "../../../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiQueryMethods, apiUrls } from "../../../utils/api";
import Alert from "../../../components/ui/alert";
import { useAppContext } from "../../../AppContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [pswErrorMessage, setPswErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);

  const { updateToken, updateUser } = useAppContext();

  const logIn = async () => {
    if (!email && !password) {
      setEmailErrorMessage("Email is required");
      setPswErrorMessage("Password is required");
    } else if (!email) {
      setEmailErrorMessage("Email is required");
    } else if (!password) {
      setPswErrorMessage("Password is required");
    } else {
      setIsLoading(true);
      setErrMessage("");
      const data = { email: email, password: password };
      await axios({
        method: apiQueryMethods?.POST,
        url: apiUrls?.logIn,
        data,
      })
        .then((resp) => {
          setIsLoading(false);
          const token = resp.data.token.accessToken;
          const { firstName, email, lastName, role } = resp.data.user;
          const {
            livePublicKey,
            liveSecretKey,
            testPublicKey,
            testSecretKey,
            wallets,
          } = resp.data.user.business;
          updateUser({ firstName, email, lastName, role });
          updateToken(token);
          setEmail("");
          setPassword("");
          navigate("/");
        })
        .catch((err) => {
          setAlert(true);
          setErrMessage(err.response.data.message);
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <div className="container">
        <div className="login-container">
          <div className="heading">
            <h3>Good to have you back!</h3>
            <p className="type2">It’s been a minute</p>
          </div>
          <form>
            <Input
              placeholder="Enter email address"
              label="Email Address"
              value={email}
              onChange={setEmail}
              hasError={emailErrorMessage !== "" ? true : false}
              errorMsg={emailErrorMessage}
            />
            <InputPassword
              placeholder="Enter password"
              label="Password"
              value={password}
              onChange={setPassword}
              hasError={pswErrorMessage !== "" ? true : false}
              errorMsg={pswErrorMessage}
            />
            <p className="type4">
              Can’t remember password?{" "}
              <Link
                style={{ color: "#ffffff", textDecoration: "underline" }}
                to="/reset-password"
              >
                Recover
              </Link>
            </p>
            <Button
              text="Login"
              className="button"
              onClick={logIn}
              isLoading={isLoading && true}
            />
          </form>
          <p className="type2">
            Don't have an acoount?{" "}
            <Link
              style={{ color: "#ffffff", textDecoration: "underline" }}
              to="/signup"
            >
              Register
            </Link>
          </p>
        </div>
        {alert && (
          <Alert
            title={errMessage}
            text=""
            timeOut={3000}
            alertOut={setAlert}
          />
        )}
      </div>
    </>
  );
};

export default Login;
