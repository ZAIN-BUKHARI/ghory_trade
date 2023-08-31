import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
// import LogoDark from "../../../assets/images/logos/logo-dark.svg";

const LogoIcon = () => {
  return (
    <Link href="/">
      <img src='/remove_bg.png' width={100} height={200} alt="ghory.trader" className="mx-[60px] w-[100px] h-[200px] " />
    </Link>
  );
};

export default LogoIcon;
