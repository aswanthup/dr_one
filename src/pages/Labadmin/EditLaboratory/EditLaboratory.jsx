import React from 'react'
import "./EditLaboratory.css"
import { NavBarAnalyze } from '../ComponentLab/NavbarAnalyze/NavBarAnalyze'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
export const EditLaboratory = () => {
    return (
        <>
            <NavBarAnalyze />
            <div className='EditLaboratory'>
                <h1 className='EditLaboratoryH1'>Edit Your <span>Lab</span> </h1>
                <div className='EditLaboratoryImagesSec'>
                    <div className='EditLabProfileImg'>
                        <p>Profile Photo</p>
                        <div className='EditLabProfileImgRela'>
                            <div className='EditLabProfileImgCloseicn'>
                                <HighlightOffRoundedIcon id="EditLabProfileImgicn" />
                            </div>
                            <img src="/images/TempLabImg.jpg" alt="" />
                        </div>
                    </div>
                    <div className='EditLabProfileImg'>
                        <p>More Photo</p>
                        <div className='EditLabSubImg'>
                            <div className='EditLabProfileImgRela'>
                                <div className='EditLabProfileImgCloseicn'>
                                    <HighlightOffRoundedIcon id="EditLabProfileImgicn" />
                                </div>
                                <img src="/images/TempLabImg.jpg" alt="" />
                            </div>
                            <div className='EditLabProfileImgRela'>
                                <div className='EditLabProfileImgCloseicn'>
                                    <HighlightOffRoundedIcon id="EditLabProfileImgicn" />
                                </div>
                                <img src="/images/TempLabImg.jpg" alt="" />
                            </div>
                            <div className='EditLabProfileImgRela'>
                                <div className='EditLabProfileImgCloseicn'>
                                    <HighlightOffRoundedIcon id="EditLabProfileImgicn" />
                                </div>
                                <img src="/images/TempLabImg.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='EditLabInputsSec1'>
                    <div className='EditLabInputsSec1InnerSec'>
                        <p>Lab Name</p>
                        <input type="text" />
                    </div>
                    <div className='EditLabInputsSec1InnerSec'>
                        <p>Features</p>
                        <input type="text" />
                    </div>
                    <div className='EditLabInputsSec1InnerSec'>
                        <p>Services</p>
                        <input type="text" />
                    </div>
                </div>
                <div className='EditLabInputsSec2'>
                    <div className='EditLabInputsSec1InnerSec2'>
                        <p>Lab Name</p>
                        <input type="text" />
                    </div>
                    <div className='EditLabInputsSec1InnerSec2'>
                        <p>Features</p>
                        <input type="text" />
                    </div>
                    <div className='EditLabInputsSec1InnerSec2'>
                        <p>Services</p>
                        <input type="text" />
                    </div>
                    <div className='EditLabInputsSec1InnerSec2'>
                        <p>Services</p>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </>
    )
}
