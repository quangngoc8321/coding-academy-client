import { useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Information from "./Information";

const ToasterTest = ({ children }) => {
  const toast = useToast();
  useEffect(() => {
    toast({
      title: "🧪 TEST ",
      description: <Information />,
      status: "info",
      duration: 900000,
      isClosable: true,
      position: "bottom-right",
    });
  }, []);
  return <div>{children}</div>;
};

export default ToasterTest;
