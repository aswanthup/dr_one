import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export const DoctorCard = ({ data }) => {
  console.log({ data });
const tempImage='./images/TempDocImg.jpg'
  const navigate = useNavigate();
  return (
    <>
      <div
       onClick={() => navigate("/doctorprofile", { state: data })}
        className={styles.cardContainer}
      >
        <div>
          <img className={styles.docImage} src={data?.image || tempImage} alt="" />
        </div>
        <div>
          <div>
            <span style={{ fontWeight: 400, fontSize: 22 }}>{data?.name}</span>
          </div>
          <div>
            {" "}
            <span
              style={{
                fontWeight: 300,
                fontSize: 18,
                color: "#3A65FD",
                textTransform: "capitalize",
              }}
            >
              {data?.specialization || `specialization`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
