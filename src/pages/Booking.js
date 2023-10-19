import React, { useReducer } from "react";
// import { useReducer } from "react"; // importi mara wahda men react
import BookingForm from "../components/Booking/BookingForm";

/** tant que constante tnajem tkharejha mel component lbara walla thotha f variable w les var constantes asemihom majuscule bsh yabdew remarquables ama hata f west component ma ybadel shay ama just a good practice */
function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}
// const INITIAL_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const Booking = () => {
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
    console.log(selectedDate);
    return initializeTimes();
  }

  return (
    <>
      <div>
        {/* lahne updateTimes = dispatch */}
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
      </div>
    </>
  );
};
export default Booking;
