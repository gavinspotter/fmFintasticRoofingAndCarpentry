import React, { useContext, useState } from "react";

import { useHttpClient } from "../shared/hooks/http-hook";

import { AuthContext } from "../shared/context/auth-context";
import { useForm } from "react-hook-form";
import "../css/style.css";
import ErrorModal from "../shared/UIElements/ErrorModal";
import { useNavigate } from "react-router";

const Login = () => {
  const auth = useContext(AuthContext);

  const { register, handleSubmit } = useForm({});

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const navigate = useNavigate();

  const [togglePassword, setTogglePassword] = useState("password");

  const loginSubmit = async (data) => {
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/admin/login`,
        "POST",
        JSON.stringify({
          username: data.login,
          password: data.password,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      auth.login(responseData.userId, responseData.token);
      navigate("/dashboard");
    } catch (err) {}
  };

  return (
    <div className="login">
      <ErrorModal error={error} onClear={clearError} />
      <div className="login-port">
        <span className="login-tie-top-right"></span>
        <span className="login-tie-top-left"></span>
        <span className="login-tie-bottom-right"></span>
        <span className="login-tie-bottom-left"></span>
        <form
          onSubmit={handleSubmit(loginSubmit)}
          className="login-inputs-firstChild"
        >
          <label>LOGIN</label>
          <input className="login-inputs" {...register("login")} />
          <label>PASSWORD</label>
          <input
            className="login-inputs"
            type={togglePassword}
            {...register("password")}
          />
          <button className="login-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
