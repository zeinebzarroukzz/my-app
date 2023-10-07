import React from 'react'
import food1 from '../../assets/firstphoto.jpg'
import './Header.css'

const Header = () => {
  return (
    <>
     <div className='description'>
        <div className='d1'>
            <h1 className='title'>Little Lemon</h1>
            <h2 className='subtitle'>Chicago</h2>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id odio sodales nunc laoreet feugiat. Aliquam quis tincidunt nunc. Aenean efficitur efficitur augue, ac rhoncus augue tincidunt eget.</p>
            <button className='btn'>reserve a table</button>
        </div>
        <div className='first_img'>
           <img src={food1}  className="logo" alt="My Website Logo" />
        </div>
    </div>
    </>
  )
}

export default  Header;


