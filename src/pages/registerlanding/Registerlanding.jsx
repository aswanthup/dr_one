import React from "react";
import "../registerlanding/registerlanding.css";
import { useNavigate } from "react-router-dom";
export default function Registerlanding() {
    const navigate=useNavigate()
  return (
    <div className="registerlanding">
      <div className="container maintitle flex">
        <h1>Register As</h1>
      </div>

      <div className="container registerlanding_main flex">
        <div className="registerlanding_left">
          <div className="registerlanding_image">
            <img src="/images/doctor10.jpg" alt="" />
          </div>

          <div onClick={()=>navigate("/doctoradminregistration1")} className="registerlanding_button flex">
            <h2>Doctor</h2>
          </div>
        </div>

        <div className="registerlanding_left">
          <div className="registerlanding_image">
            <img src="/images/hospital10.jpg" alt="" />
          </div>

          <div onClick={()=>navigate("/hospitaladminregistration1")}  className="registerlanding_button flex">
            <h2>Hospital</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
