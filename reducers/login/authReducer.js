// src/reducers/myaccount/walletdashboardReducer.js
import {
    GET_LOGIN_SUCCESS,
    GET_LOGIN_FAILURE,
    LOGOUT,
    SET_LOGGED_IN,
  } from "../../actions/types";
  
  // Function to store data in local storage or session storage
  const storeData = (key, value) => {
    // Use localStorage or sessionStorage based on your preference
    console.log(key,value);
    localStorage.setItem(key, JSON.stringify(value));
    // sessionStorage.setItem(key, JSON.stringify(value));
  };
  
  // Function to retrieve data from local storage or session storage
  const retrieveData = (key) => {
    // Use localStorage or sessionStorage based on your preference
    const value = localStorage.getItem(key);
    // const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };
  
  const initialState = {
    userData: retrieveData("userData") || null, // Retrieve the initial value from local storage or session storage
    isLoggedIn: retrieveData("isLoggedIn") || false, // Retrieve the initial value from local storage or session storage
    //isLoggedIn: false,
    error: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_LOGIN_SUCCESS:
        //  // Store the new state in local storage or session storage
        //  storeData('isLoggedIn', true);
        // Store the userData in local storage or session storage
        storeData("userData", action.payload);
  
        return {
          ...state,
          userData: action.payload,
          isLoggedIn: false,
          error: null,
        };
  
      case GET_LOGIN_FAILURE:
        // Store the new state in local storage or session storage
        storeData("isLoggedIn", false);
        // Store the userData in local storage or session storage
        storeData("userData", null);
        storeData("profile", null);
  
        return {
          ...state,
          userData: null,
          isLoggedIn: false,
          error: action.payload,
        };
      case LOGOUT:
        // Store the new state in local storage or session storage
        storeData("isLoggedIn", false);
        // Store the userData in local storage or session storage
        storeData("userData", null);
        storeData("profile", null);
  
        return {
          ...state,
          userData: null,
          isLoggedIn: false,
          error: null,
        };
  
      case SET_LOGGED_IN:
        // Store the new state in local storage or session storage
        storeData("isLoggedIn", true);
  
        return {
          ...state,
          isLoggedIn: true,
        };
  
      default:
        return state;
    }
  };
  