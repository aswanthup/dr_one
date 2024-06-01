import React from 'react'
import "./ProfileSideBar.css"
export const ProfileSideBar = ({ data: { SentData, selected } }) => {
    const FindButtonValue = (data) => {
        SentData(data)
    }
    return (
        <>
            <div className="mainadminsidebar">
                <div onClick={() => {
                    FindButtonValue("profile")
                }} className={selected?.profile ? "admimmenuicon admimmenuicon2 flex" : "admimmenuicon flex"}>
                    <i class="ri-file-chart-fill"></i>
                    <h4>Profile</h4>
                </div>

                <div
                    onClick={() => {
                        FindButtonValue("views")
                    }}
                    className={selected?.views ? "admimmenuicon admimmenuicon2 flex" : "admimmenuicon flex"}>
                    <i class="fi fi-sr-stethoscope"></i>
                    <h4>Views</h4>
                </div>
            </div >
        </>
    )
}
