import React from 'react'
import "./NavBarAnalyze.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
export const NavBarAnalyze = () => {
    return (
        <>
            <div className='AnlzAdminTop'>
                <button className='AnlzAdminTopHomeBtn'>
                    <HomeOutlinedIcon id="AnlzAdminTopHomeBtnIcon" />Home
                </button>
                <div className='AnlzAdminTopSecondSec'>
                    <p>Logout</p>
                    <LogoutIcon id="LabAdminProfileLogoutSecIcon" />
                </div>
            </div>
        </>
    )
}
