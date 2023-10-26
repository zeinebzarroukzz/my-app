import React, {useState, useEffect} from 'react'

const ConfirmedBooking = () => {
  const [status,setStatus] = useState(false)
  
  const params = new URLSearchParams(document.location.search)
  useEffect(()=>{
    
    console.log(params.get("status"))
    setStatus(params.get("status"))

  }, [])
  return (
    <div style={{height: "100vh", width:"100vw", display:"grid", placeContent:"center"}}>
        Booking {params.get("status") == "false" ? "Not Confirmed" : "Confirmed"}</div>
  )
}

export default ConfirmedBooking