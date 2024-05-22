import React, { useEffect, useState } from 'react'
import "./LabAdminProfile.css"
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';
import { port } from '../../../config';
import { Loader } from '../../../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
export const LabAdminProfile = () => {
    const navigate = useNavigate()
    const [Details, setDetails] = useState()
    const data = {
        id: 44
    }
    useEffect(() => {

        if (data?.id) {
            axios.post(`${port}/lab/labdetails`, data).then((res) => {
                console.log("res>>>>>", res)
                setDetails(res?.data?.data)
            })
        }
    }, [])
    const FnNavigate = () => {
        navigate("/analyzelab")
    }
    if (Details) {
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
                                <div onClick={() => { FnNavigate() }} className='LabAdminProfileTopSecondSecCounter'>
                                    <div className='LabAdminProfileTopIconDiv'>
                                        <SavedSearchIcon id="LabAdminProfileTopIconDivIcon" />
                                    </div>
                                    <div className='LabAdminProfileTopSecondCounter'>
                                        <h4>200</h4>
                                        <p>Views Last 30 in days</p>
                                    </div>
                                </div>
                                <div onClick={() => { FnNavigate() }} className='LabAdminProfileTopSecondSecCounter'>
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
                        <div onClick={() => { FnNavigate() }} className='LabAdminProfileLogoutSec'>
                            <p>View Analyze</p>
                            <LogoutIcon id="LabAdminProfileLogoutSecIcon" />
                        </div>
                    </div>
                    <div className='LabAdminProButtonSec'>
                        <button className='LabAdminProButton'>Add Discount</button>
                        <button className='LabAdminProButton'>Add Price</button>
                        <button onClick={() => { navigate("/editLaboratory", { state: { id: data?.id } }) }} className='LabAdminProButton'> <EditIcon /> Edit</button>
                    </div>
                    <div className='LabAdminProMainSec'>
                        <div className='LabAdminProMainSecImgOther'>
                            <img src={Details?.photo?.image1 || "/images/lab2.jpg"} className='LabAdminProMainSecImg' alt="" />
                            <div className='LabAdminProMainFontSec'>
                                <p className='LabAdminProMainFont'>{Details.name}</p>
                                <div className='LabAdminProMainTimeSec'>
                                    <p>{Details?.timing?.opening_time} to {Details?.timing?.closing_time}</p>
                                </div>
                                <div className='LabAdminProMainLocNDTime'>
                                    <div className='LabAdminProMainLocNDTimeSet'>
                                        <CallOutlinedIcon id="LabAdminProMainLocIcon" />
                                        <p>+91 {Details?.phone_no}</p>
                                    </div>
                                    <div className='LabAdminProMainLocNDTimeSet'>
                                        <EmailIcon id="LabAdminProMainLocIcon" />
                                        <p>{Details?.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='LabAdminProMainImageSec'>
                            <img src={Details?.photo?.image2} alt="" />
                            <img src={Details?.photo?.image3} alt="" />
                            <img src={Details?.photo?.image4} alt="" />
                        </div>
                        <div className='LabAdminProMainAbout'>
                            <h3>About</h3>
                            <p>{Details?.about}</p>
                        </div>
                        <div className='LabAdminProMainAbout'>
                            <h3>Address</h3>
                            <div className='LabAdminProMainAboutIconNdFont'>
                                <div className='LabAdminProMainLoc'>
                                    <div className='LabAdminProMainLocAlignLogondLoc'>
                                        <LocationOnIcon id="LabAdminProMainAboutIcon" />
                                        <p>{Details?.address}</p>
                                    </div>
                                    <div className='LabAdminProMainAboutIconNdFont2divs'>
                                        <div className='LabAdminProMainDivPin'><p>Pin: {Details?.pincode}</p></div>
                                        {/* <div className='LabAdminProMainDivPin'> <p>{Details?.pincode}</p></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='LabAdminProMainServicesAndFeatures'>
                            <div className='LabAdminProMainSerNDFeaInner'>
                                <h3>Services</h3>
                                {
                                    Details.services.map(service =>
                                        <div className='LabAdminProMainServiceCnts'>
                                            <CheckCircleIcon id="LabAdminProMainServiceCntsIcon" />
                                            <p>{service}</p>
                                        </div>
                                    )
                                }

                            </div>
                            <div className='LabAdminProMainSerNDFeaInner'>
                                <h3>Features</h3>
                                {
                                    Details?.features?.map(feature =>
                                        <div className='LabAdminProMainServiceCnts'>
                                            <CheckCircleIcon id="LabAdminProMainServiceCntsIcon" />
                                            <p>{feature}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div >
            </>
        )
    } else {
        return (
            <Loader />
        )
    }
}
