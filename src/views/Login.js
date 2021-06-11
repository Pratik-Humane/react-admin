import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import LoginController from "../controllers/LoginController";

const Login = (props) => {
  const { register, handleSubmit, formState: {errors} } = useForm({
    mode: "onChange",
  });

  const { loginHandler } = LoginController(props);

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/logo.svg"}
                    alt="logo"
                  />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <form className="pt-3" onSubmit={handleSubmit(loginHandler)}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern: /[^@]+@[^\.]+\..+/,
                      })}
                      autoComplete="off"
                      placeholder="Username"
                    />
                    <div className="errorText">
                      {errors.email && "Email is required."}
                    </div>
                    <div className="errorText">
                      {errors.email?.type === "pattern" &&
                        "Please enter valid email"}
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      name="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                      })}
                      autoComplete="off"
                      placeholder="Password"
                    />
                    <div className="errorText">
                      {errors.password && "Password is required."}
                    </div>
                    <div className="errorText">
                      {errors.password?.type === "minLength" &&
                        "Password should be minimum 6 character"}
                    </div>
                  </div>
                  <div className="mt-3">
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                      SIGN IN
                    </button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        Keep me signed in
                      </label>
                    </div>
                    <Link
                      to="/forgot-password"
                      className="auth-link text-black"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
      </div>
      {/* page-body-wrapper ends */}
    </div>
  );
}

export default connect()(Login);