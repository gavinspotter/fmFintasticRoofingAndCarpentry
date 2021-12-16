import React, { useContext, useEffect } from "react";

import { useHttpClient } from "../shared/hooks/http-hook";

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

  return <div className="dashboard"></div>;
};

export default Dashboard;
