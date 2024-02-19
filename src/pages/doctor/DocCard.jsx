import React from "react";
import styles from "./searchdoc.module.css";
import { Height } from "@mui/icons-material";

export default function DocCard() {
  return (
    <>
      <div className={styles.cardContainer}>
        <div>
          <img className={styles.docImage} src="images/Ellipse 41.png" alt="" />
        </div>
        <div>
          <div>
            <span>Dr. Rohit Rajashekhar</span>
          </div>
          <div style={{ fontWeight: 300 }}>Rating</div>
          <div>
            {" "}
            <span style={{ fontWeight: 300 }}>
              Dentist, Cosemetic/Asthetic Dentist
            </span>
          </div>
          <div>
            <span style={{ fontWeight: 300 }}>6 Year experience</span>
          </div>
        </div>
      </div>
    </>
  );
}
