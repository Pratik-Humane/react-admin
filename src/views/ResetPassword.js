import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginController from "../controllers/LoginController";

function ResetPassword(props) {
  const { register, handleSubmit, formState: { errors }, } = useForm({ mode: "onChange" });
  const { resetPassword } = LoginController(props);
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
                <h6 className="font-weight-light">Reset Password.</h6>
                <form className="pt-3" onSubmit={handleSubmit(resetPassword)}>
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
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      name="c_password"
                      {...register("c_password", {
                        required: true,
                      })}
                      autoComplete="off"
                      placeholder="Confirm Password"
                    />
                    <div className="errorText">
                      {errors.c_password && "Confirm Password is required."}
                    </div>
                  </div>
                  <div className="mt-3">
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                      Reset Password
                    </button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
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

export default withRouter(ResetPassword);
