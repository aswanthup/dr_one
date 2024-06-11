
import React, { useContext, useEffect, useState } from 'react';
import { Modal } from '@mui/material';
import { PopupContext } from './ShowFeedBackPopupContext';
import "./ShowFeedBackPopup.css";
import axios from 'axios';
import { port } from '../../config';
import { toast } from 'react-toastify';

import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

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
        axios.post(`http://192.168.1.11:3003/user/doctorafterconsult`, data).then((res) => {
            console.log("res>>>>", res)
            if (res.data.success)
                setContactData(res?.data?.interactions)
            setIsPopupVisible(true);
        })
        // axios.post(`http://192.168.1.11:3003/user/hospitalafterconsult`, data).then((res) => {
        //     console.log("res>>>>", res)
        // })
        // axios.post(`http://192.168.1.11:3003/user/labafterconsult`, data).then((res) => {
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
