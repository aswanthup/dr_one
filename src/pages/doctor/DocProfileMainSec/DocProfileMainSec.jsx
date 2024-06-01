import React, { useState } from 'react'
import "./DocProfileMainSec.css"
import { ProfileSideBar } from '../DocComponents/ProfileSideBar/ProfileSideBar'
import { DocProfileTopbar } from '../DocComponents/DocProfileTopbar/DocProfileTopbar'
import { DocAdminProfile } from '../DocComponents/DocAdminProfile/DocAdminProfile'
import { DoctorAdminViews } from '../DocComponents/DoctorAdminViews/DoctorAdminViews'
export const DocProfileMainSec = () => {
    const [ChangeDashboards, setChangeDashboards] = useState({
        profile: true
    })
    const SentData = (data) => {
        setChangeDashboards({ [data]: true })
    }
    return (
        <>

            <div className="mainadminsection">
                <DocProfileTopbar />
                <div className="mainadmindoctorsection flex">
                    <ProfileSideBar data={{ SentData: SentData, selected: ChangeDashboards }} />
                    <div className="mainadmindoctordetails mainadmincontainer">
                        <div className="scroll">
                            {ChangeDashboards?.profile &&
                                <>
                                    <DocAdminProfile />
                                </>
                            }
                            {ChangeDashboards?.views &&
                                <>
                                    <DoctorAdminViews />
                                </>
                            }
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}
