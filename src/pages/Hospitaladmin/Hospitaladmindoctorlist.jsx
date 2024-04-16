import React, { useState, useEffect } from "react";
import Hospitaladminnotification from "../../components/Hospitaladminnotification";
import Rightnavbar from "../../components/Rightnavbar";
import "../Hospitaladmin/hospitaladmindoctorlist.css";
import Hospitaladmin_doctor_card from "../../components/Hospitaladmin_doctor_card";
import axios from "axios";
import { Backdrop, CircularProgress } from "@mui/material";
import { DoctorCard } from "./DoctorCard/DoctorCard";
import HospitalSidebar from "./HospitalSidebar";
import { useNavigate } from "react-router-dom";
import { port } from "../../config";

export default function Hospitaladmindoctorlist() {
  const navigate = useNavigate();
  const [doctorsData, setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDoctorsData();
  }, []);

  const getDoctorsData = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${port}/hospital/getdoctorlist`,
        {
          id: 52,
        }
      );
      console.log(response.data.data);
      setDoctorsData(response.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <div className="hospitaladmin-main flex">
        <HospitalSidebar />

        <div className="hospitaladmin_right">
          <Hospitaladminnotification />
          <div className="manage_doctor ">
            <div className="flex-center">
              <h1>Manage Doctors</h1>
            </div>
            <div className="flex-center">
              <div className="hospitaladmin_doctor_list_button ">
                <a
                  className="pointer"
                  href=""
                  onClick={() => navigate("/hospitaladminadddoctor")}
                >
                  <h4>Add Doctor</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="hospitaladmin-doclist ">
            <div className="hospitaladmin-doclist-cardcontainer">
              {doctorsData.map((value, index) => (
                <div className="hospital-admin-card" key={index}>
                  <DoctorCard data={value} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={loading}
      // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
