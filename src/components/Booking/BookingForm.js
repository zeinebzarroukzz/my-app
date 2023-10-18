import React ,{useState} from 'react'
import './Booking.css'
const BookingForm = ( {availableTimes, dispatch}) => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [date,setDate]=useState("");
  const[time,setTime]=useState("");
  const[guest,setGuest]=useState(1);
  const[occasion,setOccasion]=useState("");
  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );
  
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({type: "update_times"}); // Dispatch the selected date to update available times
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(""); // Prevents the default form submission behavior
    setEmail("");
    setDate("");
    setGuest("");
    setTime("");
    setOccasion("");
    
    alert("booking succeded!");// You can handle form submission logic here
  };
  return (
    <div className='container'>
      <h1>-Happy to serve you-</h1>
    <form  id ="bookingForm" onSubmit={handleSubmit} >
      <div className='infor'>
      <label>FullName</label>
      <input type="text" 
      placeholder='Enter your fullname'
       id="name"
      value={name}
      onChange={(e)=> setName(e.target.value)}/>
      </div>

      <div className='infor'>
      <label>Email</label>
      <input type="email" 
      placeholder='...@gmail.com'
       id="email"
      value={email}
      onChange={(e)=> setEmail(e.target.value)}/>
      </div>

      <div className='infor'>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" 
      required
      id="res-date"  
      value={date} 
      onChange={handleDateChange} />
      <ul>
  
      </ul>
      </div>

      <div className='infor'>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" 
      value={time} 
      onChange={(e)=> setTime(e.target.value)}>
        {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                    ))}
      </select>
      </div>

      <div className='infor'>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" 
      placeholder="1" 
      min="1" max="10" 
      id="guests"  
      value={guest} 
      onChange={(e)=> setGuest(e.target.value)}/>
      </div>

      <div className='infor'>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" 
      value={occasion} 
      onChange={(e)=> setOccasion(e.target.value)}>
        <option>None</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
        <option>Other</option>
      </select>
      </div>
      <div className='btnContainer'>
       <input id='btn'type="submit" value="Make Your Reservation" />
      </div>  
      </form>
    </div>
  );
}

export default BookingForm