"use client";

import { usePathname } from "next/navigation";
import React from "react";
import styles from "../styles/Backgrounds.module.css";

const BackgroundWrapper = ({ children }) => {
  const pathname = usePathname();

  const backgroundClass =
    pathname === "/" ? styles["bg-home-page"] : styles["bg-default-page"];

  return <div className={backgroundClass}>{children}</div>;
};

export default BackgroundWrapper;
