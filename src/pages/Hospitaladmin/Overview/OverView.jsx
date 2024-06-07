import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

function Overview({ hospital }) {
  const [isAboutEditable, setIsAboutEditable] = useState(false);

  const handleAboutEditToggle = () => {
    setIsAboutEditable(!isAboutEditable);
  };

  const handleAboutEdit = (e) => {
    const { name, value } = e.target;
  };
  const handleSentAbout = () => {
   
  };
  return (
    <>
      <div className="mainadmindoctordatas flex">
        <div className="mainadmindoctordatas_profile flex">
          <img
            className="mainadmindoctordatas_profile_photo"
            src={hospital?.photo?.image1}
            alt=""
          />

          <div className="mainadmindoctordatas_profile_data flex">
            <div className="flex">
              {" "}
              <h2> {hospital?.name}</h2>{" "}
              <h4
                className="highlight_data"
                style={{
                  background: "#2A9D8F",
                  color: "white",
                  marginLeft: "10px",
                }}
              >
                {hospital?.type}
              </h4>
            </div>

            <h4
              className="highlight_data"
              style={{ background: "#3A65FD", color: "white" }}
            >
              {hospital?.licence_no}
            </h4>

            <div className="flex">
              <div className="flex texticonset">
                <i class="fi fi-sr-call-outgoing"></i>
                <h4 style={{ marginLeft: "10px" }}>{hospital?.contact_no}</h4>
              </div>
            </div>

            <div className="flex texticonset">
              <i class="fi fi-sr-envelope"></i>
              <h4 style={{ marginLeft: "10px" }}>{hospital?.email}</h4>
            </div>
          </div>
        </div>

        <div className="mainadmindoctordatas_chart flex">
          <div className="mainadmindoctordatas_chart1 flex">
            <div className="mainadmindoctordatas_chart_icon flex">
              <i class="fi fi-sr-overview"></i>
            </div>
            <div style={{ marginLeft: "18px" }}>
              <h2>200</h2>
              <h4>Views</h4>
            </div>
          </div>

          <div className="mainadmindoctordatas_chart1 mainadmindoctordatas_chart2 flex">
            <div className="mainadmindoctordatas_chart_icon flex">
              <i class="fi fi-sr-call-outgoing"></i>
            </div>

            <div style={{ marginLeft: "18px" }}>
              <h2>199</h2>
              <h4>Contacted</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="photosdivadmin">
        <h3 style={{ marginBottom: "1.3vw" }}>Images</h3>
        <div className="photosdivadminsection flex">
          <img src={hospital.photo.image1} alt="" />
          <img src={hospital.photo.image2} alt="" />
          <img src="/images/doc.jpg" alt="" />
        </div>
      </div>

      <div className="mainadmindoctoraboutavail flex">
        <div className="mainadmindoctorabout ">
          <h3 style={{ marginBottom: "1.3vw" }}>
            About{" "}
            <IconButton onClick={handleAboutEditToggle}>
              <EditIcon style={{ color: isAboutEditable ? "blue" : "black" }} />
            </IconButton>{" "}
          </h3>
          {isAboutEditable ? (
            <textarea
              onChange={handleAboutEdit}
              className="adimindoctorpinAbout"
              value={hospital?.about}
              name="about"
            ></textarea>
          ) : (
            <h4 style={{ marginBottom: "1.3vw" }}>
              {hospital?.about || "about"}
            </h4>
          )}
           {isAboutEditable &&
                            <div className='mainadmindoctoraboutConfirmBtn'>
                                <button onClick={handleSentAbout}>Update</button>
                            </div>
                        }
          <h3 style={{ marginBottom: "1.3vw" }}>Address</h3>

          <h4 style={{ marginBottom: "1vw" }}>{hospital?.address}</h4>
          <div className="flex adimindoctorpin">
            <h4 style={{ background: "#3A65FD", color: "white" }}>
              {hospital?.pincode}
            </h4>
            <h4 style={{ background: "#F3F6FF", color: "#6B8CFE" }}>
              Kozhikode
            </h4>
          </div>
        </div>

        <div className="mainadmindoctoravilability mainadmindoctoravilability2">
          <div className="admin_fea_avai flex">
            <div className="admin_fea_avai_left">
              <h3 style={{ marginBottom: "1.3vw" }}>Features</h3>
              {hospital?.feature.length > 0 &&
                hospital.feature.map((feature) => (
                  <h4 style={{ marginBottom: "1.3vw" }}>
                    <i class="ri-arrow-right-circle-fill"></i>
                    {feature}
                  </h4>
                ))}
            </div>

            <div className="admin_fea_avai_right">
              <h3 style={{ marginBottom: "1.3vw" }}>Specialities</h3>

              {hospital?.speciality.length > 0 &&
                hospital.speciality.map((speciality) => (
                  <h4 style={{ marginBottom: "1.3vw" }}>
                    <i class="ri-arrow-right-circle-fill"></i>
                    {speciality}
                  </h4>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
