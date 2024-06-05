import React, { useContext, useEffect, useState } from "react";

import MobileView from "./MobileView/Index";
import DesktopView from "./DesktopView/SearchDoc";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchDocContext } from "../../../contexts/Doctor/SearchDoctorProvider";

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { setFilters,setDocsBySearch,setAllDocsBySearch } = useContext(SearchDocContext);
  const { state } = location || {}; //coming from  main pages..by clicking btns

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

  useEffect(() => {
    if (state) {
      navigate(location.pathname, { replace: true, state: null });
    } else {
      setFilters({
        type: "",
        specializations: [],
        gender: "",
        experience: 0,
        name: "",
      });
    }
  }, []);

  return <>{isMobile ? <MobileView /> : <DesktopView />}</>;
};

export default Index;
