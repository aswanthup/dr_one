import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MobileView from "./MobileView/Index";
import DesktopView from "./DesktopView/SearchDoc";
import { MyContext } from "../../../contexts/Contexts";
import { SearchDocContext } from "../../../contexts/Doctor/SearchDoctorProvider";
import { port } from "../../../config";
const Index = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isMobile ? <MobileView /> : <DesktopView />}</>;
};

export default Index;
