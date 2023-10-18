import React from 'react'
import Nav from '../components/Nav/Nav'
import BookingForm from '../components/Booking/BookingForm'
import Footer from '../components/Footer/Footer'
import { useReducer } from 'react'
const Booking = () => {
  function initializeTimes() {
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ];
}

  const [availableTimes, dispatch] = useReducer(updateTimes, output);
  const showBookingForm = false;
  function updateTimes(state, action) {
    switch (action.type) {
        case 'update_times':
            return action.availableTimes;
        default:
            return state;
    }
}

  return (
    <>
      <Nav></Nav>
      <div>
      {showBookingForm && (<BookingForm availableTimes={availableTimes} updateTimes={dispatch} />)}
      </div>
      <Footer></Footer>
  
    </>
    )
}

export default Booking