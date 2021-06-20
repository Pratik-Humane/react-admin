import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { routes } from './Navigation';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageLoader from './components/PageLoader';
toast.configure({
  className: "text-center",
});

const Login = React.lazy(() => import("./views/Login"));
const Layout = React.lazy(() => import("./Layout/Layout"));
const PageNotFound = React.lazy(() => import("./views/PageNotFound"));
const ForgotPassword = React.lazy(() => import("./views/ForgotPassword"));
const ResetPassword = React.lazy(() => import("./views/ResetPassword"));

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            render={(props) => <Login {...props} />}
          />
          <Route
            exact
            path="/forgot-password"
            name="Forgot Password"
            render={(props) => <ForgotPassword {...props} />}
          />
          <Route
            exact
            path="/reset-password/:verification_code"
            name="Reset Password"
            render={(props) => <ResetPassword {...props} />}
          />
          <Layout>
            {routes.map((route, i) => (
              <Route
                key={`${i}${route.component}`}
                path={route.path}
                component={route.component}
              />
            ))}
          </Layout>
          <Route path="*" render={(props) => <PageNotFound {...props} />} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
