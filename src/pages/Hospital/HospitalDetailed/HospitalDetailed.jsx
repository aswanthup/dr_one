import React, { useState } from 'react'
import "./HospitalDetailed.css"
import { useEffect } from 'react'
import axios from 'axios'
import { port } from '../../../config'
import { useLocation } from 'react-router-dom'
const HospitalDetailed = () => {
    const location = useLocation()
    const [HospitalData, setHospitalData] = useState()
    const TemPImg = "./images/TempHosImg.jpg"
    useEffect(() => {
        const data = {
            id: location?.state?.id
        }

        axios.post(`${port}/hospital/hospitaldetails`, data).then((res) => {
            console.log(res)
            setHospitalData(res?.data?.data)
        })
    }, [])

    return (
        <>
            <div className='HospitalDetailedPadding'>
                <div className="mainadmindoctordatas flex">
                    <div className="mainadmindoctordatas_profile flex">
                        <img className='mainadmindoctordatas_profile_photo' src={HospitalData?.photo?.image1 || TemPImg} alt="" />
                        <div className="mainadmindoctordatas_profile_data flex">
                            <div className='flex'>  <h2>{HospitalData?.name}</h2> <h4 className='highlight_data' style={{ background: "#2A9D8F", color: "white", marginLeft: "10px" }}>{HospitalData?.type}</h4></div>
                            <h4 className='highlight_data' style={{ background: "#3A65FD", color: "white", }}>{HospitalData?.licence_no}</h4>
                            <div className='flex'>
                                <div className='flex texticonset'>
                                    <i class="fi fi-sr-call-outgoing"></i>
                                    <h4 style={{ marginLeft: "10px" }}>+91 {HospitalData?.contact_no}</h4>

                                </div>
                            </div>
                            <div className='flex texticonset'>
                                <i class="fi fi-sr-envelope"></i>
                                <h4 style={{ marginLeft: "10px" }}>{HospitalData?.email}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="photosdivadmin">
                    <h3 style={{ marginBottom: "1.3vw" }}>About</h3>
                    <div className="photosdivadminsection flex">
                        <img src={HospitalData?.photo?.image2} alt="" />
                        <img src={HospitalData?.photo?.image3} alt="" />
                        <img src={HospitalData?.photo?.image4} alt="" />
                    </div>
                </div>

                <div className="mainadmindoctoraboutavail flex">

                    <div className="mainadmindoctorabout ">
                        <h3 style={{ marginBottom: "1.3vw" }}>About</h3>
                        <h4 style={{ marginBottom: "1.3vw" }}>{HospitalData?.about}</h4>
                        <h3 style={{ marginBottom: "1.3vw" }}>{HospitalData?.address}</h3>
                        <div className='flex adimindoctorpin'>
                            <h4 style={{ background: "#3A65FD", color: "white" }}>{HospitalData?.pincode}</h4>
                        </div>
                    </div>

                    <div className="mainadmindoctoravilability mainadmindoctoravilability2">

                        <div className='admin_fea_avai flex'>

                            <div className='admin_fea_avai_left'>
                                <h3 style={{ marginBottom: "1.3vw" }}>Features</h3>
                                {HospitalData?.feature?.map(ele =>
                                    <>
                                        <h4 style={{ marginBottom: "1.3vw" }}><i class="ri-arrow-right-circle-fill"></i>{ele}</h4>
                                    </>
                                )}
                            </div>

                            <div className='admin_fea_avai_right'>
                                <h3 style={{ marginBottom: "1.3vw" }}>Specialities</h3>
                                {HospitalData?.speciality?.map(ele =>
                                    <>
                                        <h4 style={{ marginBottom: "1.3vw" }}><i class="ri-arrow-right-circle-fill"></i>{ele}</h4>
                                    </>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HospitalDetailed