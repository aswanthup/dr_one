import React from 'react'
import styles from "../../doctor/DoctorSearch/DesktopView/searchdoc.module.css";
export const HospitalCard = ({ data }) => {
    const details = data?.details
    const TemPImg = "./images/TempHosImg.jpg"
    console.log("details>>>>", details)
    return (
        <>
            <div
                // onClick={() => navigate("/doctorprofile", { state: details })}
                className={styles.cardContainer}>
                <div>
                    <img className={styles.docImage} src={details.photo?.image1 || TemPImg} alt="" />
                </div>
                <div>
                    <div>
                        <span className='LabCardSpanHeader' >
                            {details?.name}
                        </span>
                    </div>
                    <div>
                        <span className='LabCardSpan'>
                            Address : {details?.address?.address || details?.address}
                        </span>
                    </div>
                    <div>
                    </div>
                    {/* <div style={{ fontWeight: 300, fontSize: 18 }}>
                    {new Date().getFullYear() - (details?.experience || new Date().getFullYear())}
                    <span style={{ fontWeight: 300, fontSize: 18, paddingLeft: 4 }}>
                        Year Experience
                    </span>
                </div> */}
                </div>
            </div>
        </>
    )
}
