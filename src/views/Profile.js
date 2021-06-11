import axios from "axios";
import React,{useState,useEffect} from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { userProfile } from "../actions";
import { API_URL } from "../constant";
import { connect } from "react-redux";
const Profile = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: "onChange" });
  const [image, setImage] = useState(null);
  const [disImg,setDisplayImage] = useState(null);
  const [formstatus,setStatus] = useState(false);
  const updateProfile = (profiledata,e) =>{
      e.preventDefault();
      let fd = new FormData();
      let {username,email,mobile_no} = profiledata;
      fd.append("username", username);
      fd.append("email", email);
      fd.append("mobile_no", mobile_no);
      fd.append("image", image);
      setStatus(false);
      axios({
        method: "post",
        url: `${API_URL}/update-profile`,
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: fd,
      }).then(async (res) => {
        let response = await res;
        if (response.data.status === 200) {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setStatus(true);
        } else {
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  }

  useEffect(() => {
    getProfileData();
  }, [formstatus]);

  const getProfileData = async() => {
      axios({
        method: "post",
        url: `${API_URL}/user-info`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then(async (res) => {
        let response = await res;
        if (response.data.status === 200) {
          let userinfo = response.data.result;
          setValue("username", userinfo.name);
          setValue("email", userinfo.email);
          setValue("mobile_no", userinfo.mobile);
          setDisplayImage(userinfo.image);
          props.dispatch(userProfile(userinfo));
        } else {
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  }

  // change profile picture
  const changeProfileImage = e =>{
      if(e.target.files[0]){
          setImage(e.target.files[0]);
      }
  }
  return (
    <div className="col-md-8 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Profile</h4>
          <form className="forms-sample" onSubmit={handleSubmit(updateProfile)}>
            <div className="form-group">
              <label htmlFor="exampleInputUsername1">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                {...register("username", {
                  required: true,
                })}
              />
              <div className="errorText">
                {errors.username && "Username is required."}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /[^@]+@[^\.]+\..+/,
                })}
              />
              <div className="errorText">
                {errors.email && "Email is required."}
              </div>
              <div className="errorText">
                {errors.email?.type === "pattern" && "Please enter valid email"}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Mobile</label>
              <input
                type="text"
                className="form-control"
                placeholder="Mobile"
                name="mobile_no"
                maxLength="10"
                {...register("mobile_no", {
                  required: true,
                  pattern: /^[0-9]/,
                })}
              />
              <div className="errorText">
                {errors.mobile_no && "Mobile no is required."}
              </div>
              <div className="errorText">
                {errors.mobile_no?.type === "pattern" &&
                  "Please enter valid mobile_no"}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputConfirmPassword1">Image</label>
              <input
                type="file"
                onChange={changeProfileImage}
                className="form-control"
              />
              <img src={disImg} width="100px" alt="Profile" />
            </div>
            <button type="submit" className="btn btn-primary mr-2">
              Update
            </button>
            <Link className="btn btn-danger" to="/dashboard">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default connect() (Profile);