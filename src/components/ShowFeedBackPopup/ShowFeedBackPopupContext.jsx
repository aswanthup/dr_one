import React, { createContext, useEffect, useState } from 'react';

export const PopupContext = createContext();

export const ShowFeedBackPopupContext = ({ children }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const showPopup = () => {

    };
    useEffect(() => {
        // setTimeout(() => {
        setIsPopupVisible(true);
        // }, 4000);
    }, [])

    const hidePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <PopupContext.Provider value={{ isPopupVisible, showPopup, hidePopup }}>
            {children}
        </PopupContext.Provider>
    );
};