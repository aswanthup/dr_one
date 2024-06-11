


import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { port } from '../../config';
import { toast } from 'react-toastify';

export const PopupContext = createContext();

export const ShowFeedBackPopupContext = ({ children }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [ContactData, setContactData] = useState([]);
    const storedLoginData = localStorage.getItem("loginData")
    const LoggedData = JSON.parse(storedLoginData);
    const showPopup = () => {

    };
    useEffect(() => {
        const data = {
            user_id: 7
        }
        axios.post(`${port}/user/doctorafterconsult`, data).then((res) => {
            console.log("res>>>>", res)
            if (res.data.success)
            setContactData(res?.data?.interactions)
            setIsPopupVisible(true);
        }).catch(err => {
            // toast.info(err?.response?.data?.message)
        })
        // axios.post(`${port}/user/hospitalafterconsult`, data).then((res) => {
        //     console.log("res>>>>", res)
        // })
        // axios.post(`${port}/user/labafterconsult`, data).then((res) => {
        //     console.log("res>>>>", res)
        // })
    }, [])

    const hidePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <PopupContext.Provider value={{ isPopupVisible, showPopup, hidePopup, ContactData }}>
            {children}
        </PopupContext.Provider>
    );
};
