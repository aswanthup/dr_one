import React, { useEffect, useState } from "react";
import MobileView from "./MobileView/Index";
import DesktopView from "../SearchDoc";

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
