// ShowFeedBackPopup.js
import React, { useContext, useEffect, useState } from 'react';
import { Modal, Box, colors } from '@mui/material';
import { PopupContext } from './ShowFeedBackPopupContext';
import "./ShowFeedBackPopup.css"
import axios from 'axios';
import { port } from '../../config';
const ShowFeedBackPopup = () => {
    const { isPopupVisible, hidePopup } = useContext(PopupContext);

    const [FinalData, setFinalData] = useState()

    const gettingValues = (e) => {
        const { value, name } = e?.target
        setFinalData({ ...FinalData, [name]: value })
    }

    const addRating = (rating) => {
        if (FinalData?.rating < rating) {
            setFinalData({ ...FinalData, rating: rating })
        } else {
            setFinalData({ ...FinalData, rating: rating - 1 })
        }

    }
    const Getfeedback = (e) => {
        const { value, name } = e?.target
        setFinalData({ ...FinalData, [name]: value })

    }
    const storedLoginData = localStorage.getItem("loginData")
    const LoggedData = JSON.parse(storedLoginData);
    const SubmitData = () => {
        const SentData = {
            ...FinalData,
            customer_id: LoggedData?.id
        }
        // axios.post(`${port}/`, SentData).then((res) => {
        //     console.log(res)
        // })
        setFinalData({ ...FinalData, status: "success" })
    }
    const closePopup = () => {
        hidePopup()
    }
    useEffect(() => {
        if (FinalData?.status === "no") {
            hidePopup()
        }
    }, [FinalData])
    console.log("FinalData>>>", FinalData)
    return (
        <Modal
            open={isPopupVisible}
            aria-labelledby="feedback-popup"
            aria-describedby="feedback-popup-description"
            className='ShowFeedBackPopup'
        >
            <div className='ShowFeedBackPopupIn'>
                {FinalData?.status === "yes" ?
                    <>
                        <div className='ShowFeedBackPopupReviewMainText'>
                            <p>Leave a review</p>
                        </div>
                        <div className='ShowFeedBackPopupReview'>
                            <img src="./images/TempDocImg.jpg" alt="" />
                            <div className='ShowFeedBackPopupRevieName'>
                                <h5>Dr. Anilkumar</h5>
                                <p>How would you rate your experiance</p>
                            </div>
                        </div>
                        <div className='ShowFeedBackPopupReviewMainTextRating'>
                            <p>Rating</p>
                            <div className='ShowFeedBackPopupReviewMainText'>
                                <div className='ShowFeedBackPopupRatingIcons'>
                                    <i style={{ color: FinalData?.rating >= 1 && '#FA8D0D' }} onClick={() => addRating("1")} className="ri-star-fill" />
                                    <i style={{ color: FinalData?.rating >= 2 && '#FA8D0D' }} onClick={() => addRating("2")} className="ri-star-fill" />
                                    <i style={{ color: FinalData?.rating >= 3 && '#FA8D0D' }} onClick={() => addRating("3")} className="ri-star-fill" />
                                    <i style={{ color: FinalData?.rating >= 4 && '#FA8D0D' }} onClick={() => addRating("4")} className="ri-star-fill" />
                                    <i style={{ color: FinalData?.rating >= 5 && '#FA8D0D' }} onClick={() => addRating("5")} className="ri-star-fill" />
                                </div>
                            </div>

                        </div>
                        <div className='ShowFeedBackPopupReviewMainTextRating'>
                            <p>Review</p>
                            <div className='ShowFeedBackPopupReviewMainText'>
                                <div className='ShowFeedBackPopupRatingIcons'>
                                    <textarea value={FinalData?.feedback} name='feedback' onChange={Getfeedback} type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='ShowFeedBackPopupReviewMainTextRating'>
                            <button onClick={SubmitData}>Submit</button>
                        </div>

                    </>
                    :
                    FinalData?.status === "success" ?
                        <>
                            <div className='ShowFeedBackPopupReviewMainText'>
                                <img src="./images/thankyouImage.jpg" alt="" />
                            </div>
                            <div className='ShowFeedBackPopupReviewMainText'>
                                <p>Your review is under verification</p>
                            </div>
                            <div className='ShowFeedBackPopupReviewMainTextRating'>
                                <button onClick={closePopup}>Close</button>
                            </div>
                        </>
                        :
                        <>
                            <div className='ShowFeedBackPopupInImg'>
                                <img src="./images/TempDocImg.jpg" alt="" />
                            </div>
                            <div className='ShowFeedBackPopupText'>
                                <p>Have you cunsulted Dr. Anilkumar ?</p>
                                <p>Are you happy to share a review ?</p>
                            </div>
                            <div className='ShowFeedBackPopupInButtinsGap'>
                                <div className='ShowFeedBackPopupText'>
                                    <button onClick={gettingValues} name='status' value={"yes"}>Yes,Sure</button>
                                </div>
                                <div className='ShowFeedBackPopupButtons'>
                                    <button onClick={gettingValues} name='status' value={"no"} className='ShowFeedBackPopupButton1'>No</button>
                                    <button onClick={gettingValues} name='status' value={"maybe later"} className='ShowFeedBackPopupButton2'>Maybe later</button>
                                </div>
                            </div>
                        </>


                }
            </div>
        </Modal >
    );
};

export default ShowFeedBackPopup;
