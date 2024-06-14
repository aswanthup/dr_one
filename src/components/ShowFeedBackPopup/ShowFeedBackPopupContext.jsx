


import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { port } from '../../config';
import { toast } from 'react-toastify';

export const PopupContext = createContext();

export const ShowFeedBackPopupContext = ({ children }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [ContactData, setContactData] = useState([]);
    const [hospitalData, sethospitalData] = useState([]);
    const [LabData, setLabData] = useState([]);
    const [docData, setdocData] = useState([]);
    const storedLoginData = localStorage.getItem("loginData")
    const LoggedData = JSON.parse(storedLoginData);
    const showPopup = () => {

    };
    useEffect(() => {
        const data = {
            user_id: 6
        }
        axios.post(`${port}/user/doctorafterconsult`, data).then((res) => {
            console.log("res>>>>", res)
            if (res?.data?.interactions?.length > 0) {
                setdocData(res?.data?.interactions)
                setIsPopupVisible(true);
            }
        }).catch(err => {
            console.log(err)
        })
        axios.post(`${port}/user/hospitalafterconsult`, data).then((res) => {
            console.log("res>>>>", res)
            if (res?.data?.interactions.length > 0) {
                sethospitalData(res?.data?.interactions)
                setIsPopupVisible(true);
            }
        }).catch(err => {
            console.log(err)
        })
        axios.post(`${port}/user/labafterconsult`, data).then((res) => {
            console.log("res>>>>", res)
            if (res?.data?.data?.length > 0) {
                setLabData(res?.data?.data)
                setIsPopupVisible(true);
            }
        }).catch(err => {
            console.log(err)
        })
    }, [])




    useEffect(() => {
        setContactData([...hospitalData, ...docData, ...LabData])
    }, [hospitalData, docData, LabData])
    const hidePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <PopupContext.Provider value={{ isPopupVisible, showPopup, hidePopup, ContactData }}>
            {children}
        </PopupContext.Provider>
    );
};
