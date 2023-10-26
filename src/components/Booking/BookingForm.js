import React, { useState } from "react";
import "./Booking.css";

const BookingForm = ({ availableTimes, updateTimes, updatedTimes ,submit}) => {
  //updateTimes = dispatch

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  // const [guest, setGuest] = useState(1);
  // const [occasion, setOccasion] = useState("");

  /** Hedhom lkol tnajem tlemhom fi blasa wahda, taamel objet fih attributs mteek w kol mara tbadel objet edheka ma tab9ash kol haja taamlelha state wahadha khater barsha states mosh behhy lel performance */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guest: "",
    occasion: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // ligne hedhy tshouf field shnowa name mteeou w tbadel state mteek hasb value eli fel input //// 3 points edhoukom eli howa spread operator esmou ykhali object kima howa ken fih haja w ybadel juste haja jdida
    if (e.target.name === "date") {
      // lahne chofna idha ken date heya eli tbadlet donc naamlou dispatch mteena
      updateTimes({ type: "update_times", selectedDate: e.target.value });
    }
  };

  /** lahne a9t yetbadel date bsh yaamel dispatch bel action update_times eli heya update_times jeybinha mel props
   * w madem jebneha mel props yaany aadineha lel component parent eli howa Booking.js
   */

  // const handleDateChange = (e) => {
  //   const selectedDate = e.target.value;
  //   setDate(selectedDate);
  //   updateTimes({ type: "update_times", selectedDate });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formData);
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      guest: "",
      occasion: "",
    });
    
  };

  return (
    <div className="Bookingcontainer" >
      {/* évite enek tsami class container khater tnajem testha9ha f barsha blayes donc hne tnajem tbadel bookingForm container wala ay haja okhra */}
      <h1>- Happy to serve you -</h1>
      <form id="bookingForm" onSubmit={handleSubmit}>
        <div className="information">
          {/* information yomkon nty tefhemha khater ketba code w taaref aaleh ama dima a9ra hseb enou code mte3k lezem yefhmou ay developer ya9rah */}
          <label>FullName</label>
          <input
            type="text"
            placeholder="Enter your fullname"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="information">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="...@gmail.com"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="information">
          <label htmlFor="res-date">Choose date</label>
          <input
            name="date"
            type="date"
            required
            id="res-date"
            value={formData.date}
            onChange={(e) => handleChange(e)}
          />
        </div>
{updatedTimes && 
        <div className="information">
          <label htmlFor="res-time">Choose time</label>
          <select
            name="time"
            id="res-time"
            value={formData.time}
            onChange={(e) => handleChange(e)}
          >
            {updatedTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
        </div>

        }
        <div className="information">
          <label htmlFor="guests">Number of guests</label>
          <input
            name="guest"
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={formData.guest}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="information">
          <label htmlFor="occasion">Occasion</label>
          <select
            name="occasion"
            id="occasion"
            value={formData.occasion}
            onChange={(e) => handleChange(e)}
          >
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
            <option>Other</option>
          </select>
        </div>
        <div className="btnContainer">
          <input id="btn" type="submit" value="Make Your Reservation" />
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
