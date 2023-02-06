import {
  LoginPage,
  NotFoundPage,
  OTPVerificationPage,
  OverviewPage,
  ResetPasswordPage,
  SetNewPasswordPage,
  SignupPage,
} from "./pages";

export const routes = [
  {
    title: "Overview",
    subRoutes: [],
    component: <OverviewPage />,
    route: "/",
  },
  {
    title: "Login",
    subRoutes: [],
    component: <LoginPage />,
    route: "/login/",
  },
  {
    title: "Signup",
    subRoutes: [],
    component: <SignupPage />,
    route: "/signup/",
  },
  {
    title: "ResetPassword",
    subRoutes: [],
    component: <ResetPasswordPage />,
    route: "/reset-password/",
  },
  {
    title: "SetNewPassword",
    subRoutes: [],
    component: <SetNewPasswordPage />,
    route: "/new-password/",
  },
  {
    title: "Verification",
    subRoutes: [],
    component: <OTPVerificationPage />,
    route: "/verification/",
  },
  {
    title: "NotFound",
    subRoutes: [],
    component: <NotFoundPage />,
    route: "*",
  },
];
