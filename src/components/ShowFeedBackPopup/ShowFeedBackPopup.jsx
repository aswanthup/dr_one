const ShowFeedBackPopup = () => {
    const { isPopupVisible, hidePopup, ContactData } = useContext(PopupContext);
    const [ConstantData, setConstantData] = useState(null);
    const [FinalData, setFinalData] = useState({ rating: 0, feedback: '', status: '' });

    const gettingValues = (e) => {
        const { value, name } = e.target;
        setFinalData(prevData => ({ ...prevData, [name]: value }));
    };
    const addRating = (rating) => {
        if (FinalData?.rating < rating) {
            setFinalData({ ...FinalData, rating: rating })
        } else {
            setFinalData({ ...FinalData, rating: rating - 1 })
        }
    }
    const Getfeedback = (e) => {
        const { value, name } = e.target;
        setFinalData(prevData => ({ ...prevData, [name]: value }));
    };

    const storedLoginData = localStorage.getItem("loginData");
    const LoggedData = JSON.parse(storedLoginData);

    const SubmitData = () => {
        const SentData = {
            ...FinalData,
            user_id: 7,
            doctor_id: ConstantData?.doctor_id,
            interactedid: ConstantData?.lastInteractionId
        };
        const checkFields = !SentData.rating || !SentData?.message
        console.log("SentData>>>>", SentData)
        if (!checkFields) {
            axios.post(`http://192.168.1.11:3003/doctor/doctor_feedback`, SentData).then((res) => {
                console.log(res);
                if (res?.data?.success) {
                    toast.success(res?.data?.message)
                    setFinalData(prevData => ({ ...prevData, status: "success" }));
                }
            });
        } else {
            if (!SentData.rating) {
                toast.info("Please provide a rating.")
            } else {
                toast.info("Please provide a feedback.")
            }
        }

    };

    const closePopup = () => {
        hidePopup();
    };

    useEffect(() => {
        if (FinalData.status === "N" || FinalData.status === "L" || FinalData.status === "NR") {
            hidePopup();
        }
    }, [FinalData, hidePopup]);

    useEffect(() => {
        if (Array.isArray(ContactData) && ContactData.length > 0) {
            setConstantData(ContactData[0]);
        } else {
            setConstantData(null);
        }
    }, [ContactData]);

    return (
        <>
            <Modal
                open={isPopupVisible}
                aria-labelledby="feedback-popup"
                aria-describedby="feedback-popup-description"
                className='ShowFeedBackPopup'
            >
                <div className='ShowFeedBackPopupIn'>
                    {FinalData.status === "Y" ? (
                        <>
                            <div className='ShowFeedBackPopupReviewMainText'>
                                <p>Leave a review</p>
                            </div>
                            <div className='ShowFeedBackPopupReview'>
                                <img src="./images/TempDocImg.jpg" alt="" />
                                <div className='ShowFeedBackPopupRevieName'>
                                    <h5>{ConstantData?.doctor_name}</h5>
                                    <p>How would you rate your experience</p>
                                </div>
                            </div>
                            <div className='ShowFeedBackPopupReviewMainTextRating'>
                                <p>Rating</p>
                                <div className='ShowFeedBackPopupReviewMainText'>
                                    <div className='ShowFeedBackPopupRatingIcons'>
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <i
                                                key={num}
                                                style={{ color: FinalData.rating >= num ? '#FA8D0D' : undefined }}
                                                onClick={() => addRating(num)}
                                                className="ri-star-fill"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='ShowFeedBackPopupReviewMainTextRating'>
                                <p>Review</p>
                                <div className='ShowFeedBackPopupReviewMainText'>
                                    <div className='ShowFeedBackPopupRatingIcons'>
                                        <textarea
                                            value={FinalData?.message}
                                            name='message'
                                            onChange={Getfeedback}
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='ShowFeedBackPopupReviewMainTextRating'>
                                <button onClick={SubmitData}>Submit</button>
                            </div>
                        </>
                    ) : FinalData.status === "success" ? (
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
                    ) : (
                        <>
                            <div className='ShowFeedBackPopupInImg'>
                                <img src="./images/TempDocImg.jpg" alt="" />
                            </div>
                            <div className='ShowFeedBackPopupText'>
                                <p>Have you consulted {ConstantData?.doctor_name}?</p>
                                <p>Are you happy to share a review?</p>
                            </div>
                            <div className='ShowFeedBackPopupInButtinsGap'>
                                <div className='ShowFeedBackPopupText'>
                                    <button onClick={gettingValues} name='status' value={"Y"}>Yes, Sure</button>
                                </div>
                                <div className='ShowFeedBackPopupButtons'>
                                    <button onClick={gettingValues} name='status' value={"NR"} className='ShowFeedBackPopupButton1'>Not Responding</button>
                                    <button onClick={gettingValues} name='status' value={"N"} className='ShowFeedBackPopupButton2'>Not Consulted</button>
                                </div>
                                <div className='ShowFeedBackPopupTextLater'>
                                    <button onClick={gettingValues} name='status' value={"L"}>Maybe Later</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </Modal>
        </>
    );
};

export default ShowFeedBackPopup;


