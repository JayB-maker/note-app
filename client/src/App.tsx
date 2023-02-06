import { useState } from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContext } from "./AppContext";
import {
  getToken,
  getUser,
  storeToken,
  storeUser,
} from "./storage";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  }>(getUser());

  const [token, setToken] = useState(getToken());

  const updateUser = (data: any) => {
    storeUser(data);
    setUser(data);
  };

  const updateToken = (token: any) => {
    storeToken(token);
    setToken(token);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        token,
        updateUser,
        updateToken,
      }}
    >
      
          <div className="App">
            <Router>
              <ScrollToTop />
              <AppRoutes />
            </Router>
          </div>
    </AppContext.Provider>
  );
}

export default App;
