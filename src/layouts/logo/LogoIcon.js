import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import LogoDark from "../../../assets/images/logos/logo-dark.svg";

const LogoIcon = () => {
  return (
    <Link href="/">
      <img src='/go1.png' width={100} height={100} alt="ghory.trader" className="mx-10" />
    </Link>
  );
};

export default LogoIcon;
