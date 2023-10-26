import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <>
     <div className='description1'>
        <div className='d1'>
            <h1 className='firsttitle'>Little Lemon</h1>
            <h2 className='subtitle'>Chicago</h2>
            <p className='descriptionResto'>Charming and inviting restaurant that offers a delightful culinary experience. Nestled in the heart of the city, our restaurant is a place where flavors and aromas come together to create a memorable dining adventure.</p>
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



