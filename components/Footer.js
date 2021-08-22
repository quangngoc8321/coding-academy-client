import { Center } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <Center p="2">
      &copy;2021 - 💻 ✋ Design & Code by tutran -
      <Link href="/">
        <a style={{ textDecoration: "underline" }}>codingAcademy</a>
      </Link>
    </Center>
  );
};

export default Footer;
