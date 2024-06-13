import React, { useState } from 'react'
import "./HospitalDetailed.css"
import { useEffect } from 'react'
import axios from 'axios'
import { port } from '../../../config'
import { useLocation } from 'react-router-dom'
const HospitalDetailed = () => {
    const location = useLocation()
    const HospitalData = location?.state?.details
    const TemPImg = "./images/TempHosImg.jpg"
    const cunsultNow = () => {
        const data = {
            userid: 7,
            id: HospitalData?.id,
            type: "Hospital",
            status: "P"

        }
        axios.post(`${port}/user/consultcount`, data).then((res) => {
            console.log("res>>>>", res)
        })
    }
    useEffect(() => {
        if (HospitalData?.id) {
            const data = {
                userid: 7,
                id: HospitalData?.id,
                type: "Hospital"
            }
            axios.post(`${port}/user/viewcount`, data).then((res) => {
                console.log("res>>>>", res)
            })
        }
    }, [])

    return (
        <>
            <div className='HospitalDetailedPadding'>
                <div className="mainadmindoctordatas flex">
                    <div className="mainadmindoctordatas_profile flex">
                        <img className='mainadmindoctordatas_profile_photo' src={HospitalData?.photo?.image1 || TemPImg} alt="" />
                        <div className="mainadmindoctordatas_profile_data flex">
                            <div className='flex'>  <h2>{HospitalData?.name}</h2> </div>
                            <h4 className='highlight_data' style={{ background: "#3A65FD", color: "white", }}>{HospitalData?.type}</h4>
                            <div className='flex'>

                            </div>
                            <div className='flex texticonset'>
                                <i class="fi fi-sr-envelope"></i>
                                <h4 style={{ marginLeft: "10px" }}>{HospitalData?.email}</h4>
                            </div>
                            <div className='flex texticonsetAlign'>
                                <a onClick={cunsultNow} href={`tel:91${HospitalData?.contact}`}>
                                    <i class="fi fi-sr-call-outgoing"></i>
                                    Contact now</a>
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
                <div className='doc_profileSecFeedBack'>

                    <h2 clas>Rating & Reviews</h2>
                    <div className='doc_profileSecFeedBackAndRatingBox'>
                        <div className='doc_profileSecFeedBackAndRatingBoxFlex'>
                            <h1>5K</h1>
                            <p>Total Reviews</p>
                        </div>
                        <div className='doc_profileSecFeedBackAndRatingBoxFlex'>
                            <h1>4.6</h1>
                            <p>Average Rating</p>
                        </div>
                    </div>

                    <div className='doc_profileSecFeedBackStart'>
                        <div className='doc_profileSecFeedBItem'>
                            <div className='doc_profileSecFeedBItemImgSec'>
                                <img src="./images/TempDocImg.jpg" alt="" />
                            </div>
                            <div className='doc_profileSecFeedBItemImgSec'>
                                <div className='doc_profileSecFeedBItemImgSecFlex'>
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                </div>
                                <p> 2/4/2024</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus voluptatibus reiciendis quos commodi quasi quidem nam eos nobis voluptatem ullam at vero veniam nostrum doloribus magni illum, possimus modi?</p>
                                <div className='doc_profileSecFeedBIFlexName'>
                                    <i class="ri-checkbox-circle-line"></i>
                                    <h4>Haseeb</h4>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default HospitalDetailed