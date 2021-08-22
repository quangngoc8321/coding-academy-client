import router from "next/router";
import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const GuestRoute = ({ children }) => {
  const { isAuthStateReady, user } = useContext(AuthContext);
  useEffect(() => {
    if (isAuthStateReady) {
      if (user) {
        router.push("/");
      }
    }
  }, [isAuthStateReady, user]);
  return <div>{isAuthStateReady && !user && children}</div>;
};

export default GuestRoute;
