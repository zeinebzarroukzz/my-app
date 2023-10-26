import React from 'react'
import img1 from '../../assets/food/greek-salad.webp'
import img2 from '../../assets/food/bruschetta.jpeg'
import img3 from '../../assets/food/lemonCake.jpg'

import './Main.css'
const Main = () => {
  return (
    <>
    <div className='specials'>
      <div className='specials_1'>
        <h1 >This weeks specials!</h1>
        <button className='btn'>Online Menu</button>
      </div>
    
      <div className="specials_2">
        <div className="row">
          <div className="colmenu">
            <img src={img1} className='img'alt="Image 1"></img>
            <h2>Greek salad</h2>
            <p className='money'> $10</p>
            <p>Greek salad is known for its vibrant colors, fresh ingredients, and the harmonious combination of flavors</p>
            <button>order a delivery</button>
          </div>
          <div className="colmenu">
           <img src={img2} className='img' alt="Image 1"></img>
            <h2>Bruchetta</h2>
            <p className='money'>$15</p>
            <p>Bruschetta is known for its simplicity and fresh, vibrant flavors and is often served as an appetizer</p>
            <button>order a delivery</button>
          </div>
          <div className="colmenu">
          <img src={img3} className='img' alt="Image 1"></img>
            <h2>Lemon Dessert</h2>
            <p className='money'> $30</p>
            <p>lemon desserts include lemon meringue pie, lemon bars, lemon cheesecake, lemon cookies, lemon pound cake, lemon sorbet..</p>
            <button>order a delivery</button>
          </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Main
