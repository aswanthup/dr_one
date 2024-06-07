import { React, useState, useEffect } from "react";
import "../Hospitaladmin/hospitaladmin.css";
import Sidebar from "./Sidebar/HospitalSidebar";
import HospitalAdminDashBoard from "./Overview/OverView";
import HospitalTopbar from "./Topbar/HospitalTopbar";
import Hospitaladmindoctorlist from "./Doctors/Hospitaladmindoctorlist";
import Viewers from "./Viewers/Viewers";
import ManageDoc from './ManageDoctor/Index'
import axios from "axios";
import { port } from "../../config";
import { Loader } from "../../components/Loader/Loader";

export default function Hospitaladmin() {
  const [loading, setLoading] = useState(false);
  const [ChangeDashboards, setChangeDashboards] = useState({
    overview: true,
  });
  const [hospital, setHospital] = useState({
    about: "",
    address: "",
    contact_no: "",
    datetime: "",
    email: "",
    feature: [],
    id: "",
    licence_no: "",
    name: "",
    onlinebooking: "",
    password: "",
    photo: "",
    pincode: "",
    rating: "",
    speciality: [],
    type: "",
    unique_id: "",
  });
  const SentData = (data) => {
    setChangeDashboards({ [data]: true });
  };
  const fetchHospital = async () => {
    setLoading(true);
    try {
      const { id } = JSON.parse(localStorage.getItem("loginData")) || {};
      const response = await axios.post(`${port}/hospital/hospitaldetails`,{ id:id}      
      );
      setHospital(response.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchHospital();
  }, []);
  console.log("Hospital data ", hospital);
  return (
    <div className="mainadminsection">
      <HospitalTopbar
        data={{ SentData: SentData, selected: ChangeDashboards }}
      />
      <div className="mainadmindoctorsection flex">
        <Sidebar data={{ SentData: SentData, selected: ChangeDashboards }} />
        <div className="mainadmindoctordetails mainadmincontainer">
          <div className="scroll">
            {ChangeDashboards?.overview && (
              <HospitalAdminDashBoard hospital={hospital} />
            )}
            {ChangeDashboards?.doctor && <Hospitaladmindoctorlist setChangeDashboards={setChangeDashboards} />}
            {ChangeDashboards?.viewers && <Viewers />}
            {ChangeDashboards?.feedbacks && <Viewers />}
            {ChangeDashboards?.manageDoc && <ManageDoc />}
          </div>
        </div>
      </div>
      {/* {loading &&
      <loader/>} */}
    </div>
  );
}
