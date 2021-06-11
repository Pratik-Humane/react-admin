import React from 'react'
import { Link, withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginController from "../controllers/LoginController";

function ForgotPassword(props) {
    const { register, handleSubmit, formState: { errors }, } = useForm({ mode: "onChange", });
    const { forgotPassword } = LoginController(props);
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
                  <h6 className="font-weight-light">Forgot Password.</h6>
                  <form className="pt-3" onSubmit={handleSubmit(forgotPassword)}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="femail"
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
                    <div className="mt-3">
                      <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                        Forgot Password
                      </button>
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" />
                          Keep me signed in
                        </label>
                      </div>
                      <Link to="/login" className="auth-link text-black">
                        click here to login
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

export default withRouter(ForgotPassword);
