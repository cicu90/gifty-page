import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { deleteUserData } from "../../Utils/Credentials/Credentials";



const Logout = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    deleteUserData();
    navigate("/", { replace:true });
  });

  return <></>;
};
  export default Logout;
