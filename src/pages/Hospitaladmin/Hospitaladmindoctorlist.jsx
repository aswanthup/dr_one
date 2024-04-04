import React, { useState, useEffect } from "react";
import Hospitaladminnotification from "../../components/Hospitaladminnotification";
import Rightnavbar from "../../components/Rightnavbar";
import "../Hospitaladmin/hospitaladmindoctorlist.css";
import Hospitaladmin_doctor_card from "../../components/Hospitaladmin_doctor_card";
import axios from "axios";
import { Backdrop, CircularProgress } from "@mui/material";


export default function Hospitaladmindoctorlist() {
  const [doctorsData, setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDoctorsData = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:3003/hospital/getdoctorlist`,
        {
          id: 52,
        }
      );
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDoctorsData();
  }, []);

  return (
    <div>
      <div className="hospitaladmin-main flex">
        <Rightnavbar />

        <div className="hospitaladmin_right">
          <Hospitaladminnotification />
          <div className="manage_doctor">
            <h1>Manage Doctors</h1>
          </div>

          <div className="hospitaladmin_doctor_cards flex">
            <div className="hospitaladmin_doctor_cards1 flex">
              <Hospitaladmin_doctor_card />
              <Hospitaladmin_doctor_card />
              <Hospitaladmin_doctor_card />
            </div>

            <div className="hospitaladmin_doctor_cards1 flex">
              <Hospitaladmin_doctor_card />
              <Hospitaladmin_doctor_card />
              <Hospitaladmin_doctor_card />
            </div>
            <div className="hospitaladmin_doctor_cards1 flex">
              <Hospitaladmin_doctor_card />
              <Hospitaladmin_doctor_card />
              <Hospitaladmin_doctor_card />
            </div>
          </div>

          <div className="hospitaladmin_doctor_list_button flex">
            <a href="">
              <h4>Add Doctor</h4>
            </a>
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
