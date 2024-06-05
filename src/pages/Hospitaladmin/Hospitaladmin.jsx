import { React, useState } from "react";
import "../Hospitaladmin/hospitaladmin.css";
import Sidebar from "./Sidebar/HospitalSidebar";
import HospitalAdminDashBoard from "./Overview/OverView";
import HospitalTopbar from "./Topbar/HospitalTopbar";
import Hospitaladmindoctorlist from "./Doctors/Hospitaladmindoctorlist";
import Viewers from "./Viewers/Viewers";

export default function Hospitaladmin() {
  const [ChangeDashboards, setChangeDashboards] = useState({
    overview: true,
  });
  const SentData = (data) => {
    setChangeDashboards({ [data]: true });
  };
  return (
    <div className="mainadminsection">
      <HospitalTopbar
        data={{ SentData: SentData, selected: ChangeDashboards }}
      />
      <div className="mainadmindoctorsection flex">
        <Sidebar data={{ SentData: SentData, selected: ChangeDashboards }} />
        <div className="mainadmindoctordetails mainadmincontainer">
          <div className="scroll">
            {ChangeDashboards?.overview && <HospitalAdminDashBoard />}
            {ChangeDashboards?.doctor && <Hospitaladmindoctorlist />}
            {ChangeDashboards?.viewers && <Viewers />}
            {ChangeDashboards?.feedbacks && <Viewers />}
          </div>
        </div>
      </div>
    </div>
  );
}
