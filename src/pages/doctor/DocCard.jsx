import React from "react";
import styles from "./searchdoc.module.css";
import { Height } from "@mui/icons-material";

export default function DocCard({ details }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <div>
          <img className={styles.docImage} src={details?.image} alt="" />
        </div>
        <div>
          <div>
            <span style={{ fontWeight: 400, fontSize: 22 }}>
              {details?.name}
            </span>
          </div>
          <div style={{ fontWeight: 300, fontSize: 18 }}>Rating</div>
          <div>
            {" "}
            <span style={{ fontWeight: 300, fontSize: 18 }}>
              {details?.specialization}
            </span>
          </div>
          <div>
            <span style={{ fontWeight: 300, fontSize: 18 }}>
              {new Date().getFullYear() -
                parseInt(details?.experience || new Date().getFullYear(), 10)} Year Experience
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
