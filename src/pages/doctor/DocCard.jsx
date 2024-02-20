import React from "react";
import styles from "./searchdoc.module.css";
import { Height } from "@mui/icons-material";

export default function DocCard({details}) {
  return (
    <>
      <div className={styles.cardContainer}>
        <div>
          <img className={styles.docImage} src={details?.image} alt="" />
        </div>
        <div>
          <div>
            <span style={{ fontWeight: 400,fontSize: 22 }}>{details?.name}</span>
          </div>
          <div style={{ fontWeight: 300, fontSize: 18 }}>Rating</div>
          <div>
            {" "}
            <span style={{ fontWeight: 300, fontSize: 18 }}>
              Dentist, Cosemetic/Asthetic Dentist
            </span>
          </div>
          <div>
            <span style={{ fontWeight: 300, fontSize: 18 }}>
              6 Year experience
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
