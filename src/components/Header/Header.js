import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <>
     <div className='description1'>
        <div className='d1'>
            <h1 className='firsttitle'>Little Lemon</h1>
            <h2 className='subtitle'>Chicago</h2>
            <p className='descriptionResto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id odio sodales nunc laoreet feugiat. Aliquam quis tincidunt nunc. Aenean efficitur efficitur augue, ac rhoncus augue tincidunt eget.</p>
            <button className='btn'>reserve a table</button>
        </div>
        <div className='first_img'>
           <img src={props.img}  className="logo" alt="My Website Logo" />
        </div>
    </div>
    </>
  )
}

export default  Header;



