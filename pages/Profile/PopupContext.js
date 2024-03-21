// PopupContext.js
import React, { createContext, useState, useContext } from 'react';

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const openPopup = () => setIsVisible(true);
    const closePopup = () => setIsVisible(false);

    return (
        <PopupContext.Provider value={{ isVisible, openPopup, closePopup }}>
            {children}
        </PopupContext.Provider>
    );
};
