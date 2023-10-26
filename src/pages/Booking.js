import React, { useReducer, useState } from "react";
// import { useReducer } from "react"; // importi mara wahda men react
import BookingForm from "../components/Booking/BookingForm";
import { Navigate, useNavigate } from "react-router-dom";

/** tant que constante tnajem tkharejha mel component lbara walla thotha f variable w les var constantes asemihom majuscule bsh yabdew remarquables ama hata f west component ma ybadel shay ama just a good practice */
function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}
// const INITIAL_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const Booking = () => {

  const [updatedTimes, setUpdatedTimes] = useState(null);
  
  const [availableTimes, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "update_times":
        const updatedTimes = getUpdatedTimes(action.selectedDate);
        return updatedTimes;
      default:
        return state;
    }
  }, initializeTimes());

  // lahne ma famesh haja kbira, juste el use reducer ktebna fel def mteeha el traitement eli ysir w initial state mteena heya initializeTimes() or INITIAL_TIMES kif kif

  //ma naarefsh aal logique el matloub fel updateTimes ama ahaya fonction jdida tekhedh el date eli khtarneha parameter w nty aamel beha esh theb pour le moment tkharejlek data mteek fi console w trajaalek dates mteek lwela
  function getUpdatedTimes(selectedDate) {
    const result = fetchAPI(new Date(selectedDate)); 
    setUpdatedTimes(result);
    return result
  }

  const submitForm = (data) => {
    submitAPI(data) // resultat true
    // submitAPI2(data) resultat false
  }

  return (
    <>
    <div style={{height: "100vh", width:"100vw", display:"grid", placeContent:"center"}}>
        {/* lahne updateTimes = dispatch */}
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} updatedTimes={updatedTimes} submit={(formData)=>submitForm(formData)}/>
      </div>
    </>
  );
};
export default Booking;


const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export function fetchAPI(date) {
  let result = [];
  let dt = new Date(date);
  let seed = dt.getDate();

  let random = seededRandom(seed);
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}

export function submitAPI(formData) {
  window.location.href="/confirmed?status=true"
  return true;
}

export function submitAPI2(formData) {
  window.location.href="/confirmed?status=false"
  
  return false;
}
