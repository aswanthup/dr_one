import React from 'react'
import "./LabAdminProfile.css"
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export const LabAdminProfile = () => {
    return (
        <>
            <div className='LabAdminProfile'>
                <div className='LabAdminProfileTop'>
                    <div className='LabAdminProfileLogoutSec'>
                        <p>Logout</p>
                        <LogoutIcon id="LabAdminProfileLogoutSecIcon" />
                    </div>
                    <div className='LabAdminProfileTopManage'>
                        <p className='LabAdminProfileTopPtag'>Manage Your <br /><span>Lab</span></p>
                        <div className='LabAdminProfileTopSecondSec'>
                            <div className='LabAdminProfileTopSecondSecCounter'>
                                <div className='LabAdminProfileTopIconDiv'>
                                    <SavedSearchIcon id="LabAdminProfileTopIconDivIcon" />
                                </div>
                                <div className='LabAdminProfileTopSecondCounter'>
                                    <h4>200</h4>
                                    <p>Views Last 30 in days</p>
                                </div>
                            </div>
                            <div className='LabAdminProfileTopSecondSecCounter'>
                                <div className='LabAdminProfileTopIconDiv'>
                                    <CallOutlinedIcon id="LabAdminProfileTopIconDivIcon" />
                                </div>
                                <div className='LabAdminProfileTopSecondCounter'>
                                    <h4>20</h4>
                                    <p>Contacts in Last 30 days</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='LabAdminProfileLogoutSec'>
                        <p>View Analyze</p>
                        <LogoutIcon id="LabAdminProfileLogoutSecIcon" />
                    </div>
                </div>
                <div className='LabAdminProButtonSec'>
                    <button className='LabAdminProButton'>Add Discount</button>
                    <button className='LabAdminProButton'>Add Price</button>
                    <button className='LabAdminProButton'> <EditIcon /> Edit</button>
                </div>
                <div className='LabAdminProMainSec'>
                    <div className='LabAdminProMainSecImgOther'>
                        <img src="/images/lab2.jpg" className='LabAdminProMainSecImg' alt="" />
                        <div className='LabAdminProMainFontSec'>
                            <p className='LabAdminProMainFont'>New Emprire Labs</p>
                            <div className='LabAdminProMainTimeSec'>
                                <p>10:00 AM to 10:00 PM</p>
                            </div>
                            <div className='LabAdminProMainLocNDTime'>
                                <div className='LabAdminProMainLocNDTimeSet'>
                                    <CallOutlinedIcon id="LabAdminProMainLocIcon" />
                                    <p>+91 9878898348</p>
                                </div>
                                <div className='LabAdminProMainLocNDTimeSet'>
                                    <EmailIcon id="LabAdminProMainLocIcon" />
                                    <p>Emprire@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='LabAdminProMainImageSec'>
                        <img src="/images/main (6).jpg" alt="" />
                        <img src="/images/main (6).jpg" alt="" />
                        <img src="/images/main (6).jpg" alt="" />
                    </div>
                    <div className='LabAdminProMainAbout'>
                        <h3>About</h3>
                        <p>Maintaining discretion in a lab environment is crucial for various reasons, including protecting intellectual property, ensuring the safety and security of
                            experiments and materials, and respecting confidentiality agreements. Here are some tips for maintaining discretion in your lab</p>
                    </div>
                    <div className='LabAdminProMainAbout'>
                        <h3>Address</h3>
                        <div className='LabAdminProMainAboutIconNdFont'>
                            <LocationOnIcon id="LabAdminProMainAboutIcon" />
                            <div className='LabAdminProMainLoc'>
                                <p>Shop No 3, Empire House, Irla, S V Road, Vile Parle West, Mumbai - 400056 (Opposite Irla Petrol Pump)</p>
                                <div className='LabAdminProMainAboutIconNdFont2divs'>
                                    <div className='LabAdminProMainDivPin'><p>Pin: 6745768</p></div>
                                    <div className='LabAdminProMainDivPin'> <p>Kozhikode</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='LabAdminProMainServicesAndFeatures'>

                    </div>
                </div>
            </div>
        </>
    )
}
