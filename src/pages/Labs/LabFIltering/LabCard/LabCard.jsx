import React from 'react'
import "./LabCard.css"
import styles from "../../../doctor/DoctorSearch/DesktopView/searchdoc.module.css";
export const LabCard = ({ data }) => {
    const details = data?.details
    const TemPImg = "./images/TempLabImg.jpg"
    return (
        <div
            // onClick={() => navigate("/doctorprofile", { state: details })}
            className={styles.cardContainer}>
            <div>
                <img className={styles.docImage} src={details.photo?.image1 || TemPImg} alt="" />
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
                    <span style={{ fontWeight: 300, fontSize: 18, color: "#3A65FD", textTransform: "capitalize" }}>
                        {details?.specialization}
                    </span>
                </div>
                {/* <div style={{ fontWeight: 300, fontSize: 18 }}>
                    {new Date().getFullYear() - (details?.experience || new Date().getFullYear())}
                    <span style={{ fontWeight: 300, fontSize: 18, paddingLeft: 4 }}>
                        Year Experience
                    </span>
                </div> */}
            </div>
        </div>
    )
}
