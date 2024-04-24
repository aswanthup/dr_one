import React from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

export default function DocCard({ data }) {
  const details = data
  const navigate = useNavigate()
  return (
    <>
      <div onClick={() => navigate("/doctorprofile", { state: details })} className={styles.cardContainer}>
        <div>
          <img className={styles.docImage} src={details?.photo?.image1 || details?.image} alt="" />
        </div>
        <div>
          <div>
            <span style={{ fontWeight: 400, fontSize: 18 }}>
              {details?.name}
            </span>
          </div>
          <div style={{ fontWeight: 300, fontSize: 16 }}>Rating</div>
          <div>
            {" "}
            <span style={{ fontWeight: 300, fontSize: 16, color: "#3A65FD", textTransform: "capitalize" }}>
              {details?.specialization}
            </span>
          </div>
          <div style={{ fontWeight: 300, fontSize: 16 }}>
            {new Date().getFullYear() - (details?.experience || new Date().getFullYear())}
            <span style={{ fontWeight: 300, fontSize: 16, paddingLeft: 4 }}>
              Year Experience
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
