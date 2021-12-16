import React, { useContext, useEffect } from "react";

import { useHttpClient } from "../shared/hooks/http-hook";

import { IoHomeOutline, IoPowerOutline } from "react-icons/io5";

import { AuthContext } from "../shared/context/auth-context";
import { useForm } from "react-hook-form";

const Dashboard = () => {
  const auth = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    name: "",
    price: "",
    description: "",
    bulkName: "",
    bulkDescription: "",
    bulkPrice: "",
    image: null,
    bulkImage: null,
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        price: "",
        description: "",
        bulkName: "",
        bulkDescription: "",
        bulkPrice: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className="dashboard">
      <div className="dashboard-homeNav">
        <svg width="0" height="0">
          <linearGradient
            id="blue-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#33D4FF" offset="0%" />
            <stop stopColor="#015CD0" offset="100%" />
          </linearGradient>
        </svg>

        <IoHomeOutline style={{ stroke: "url(#blue-gradient)" }} />
      </div>

      <div className="dashboard-logout">
        <svg width="0" height="0">
          <linearGradient
            id="blue-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#33D4FF" offset="0%" />
            <stop stopColor="#015CD0" offset="100%" />
          </linearGradient>
        </svg>

        <IoPowerOutline style={{ stroke: "url(#blue-gradient)" }} />
      </div>

      {/* <div className="dashboard-logout">
        <svg width="0" height="0">
          <linearGradient
            id="blue-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#33D4FF" offset="0%" />
            <stop stopColor="#015CD0" offset="100%" />
          </linearGradient>
        </svg>
        <IoPower style={{ stroke: "url(#blue-gradient)" }} />
      </div> */}
    </div>
  );
};

export default Dashboard;