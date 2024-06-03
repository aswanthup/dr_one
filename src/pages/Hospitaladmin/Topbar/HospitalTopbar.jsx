import React from "react";

function HospitalTopbar({ data: { SentData, selected } }) {
  const FindButtonValue = (data) => {
    SentData(data);
  };
  return (
    <div className="doctoradminnavbar">
      <div className="containeradmin doctoradminnavbar2 flex">
        <div className="adminlogodiv flex">
          <img src="/images/doc.jpg" alt="" />
          <h2 style={{ marginLeft: "18px" }}>DOCONE</h2>
        </div>

        <div className="adminlogodiv flex">
          <div
            style={{ marginLeft: "18px" }}
            className="adminnotification flex"
          >
            <i class="ri-notification-2-line"></i>
          </div>

          <img style={{ marginLeft: "18px" }} src="/images/doc.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HospitalTopbar;
