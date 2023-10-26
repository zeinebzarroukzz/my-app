
import React, { useState ,useRef} from "react";

import "./Menus.css";
const Menus = () => {
  const [soupes, setSoupes] = useState([
    {
      soupname: "Vegetable Soup",
      img: "/menuPhotos/soupe-legumes-citrouille-creme.jpg",
      price: "12$",
    },
    {
      soupname: "Pumpkin Soup",
      img: "./menuPhotos/pumpkin-soup-3705294_1280.jpg",
      price: "20$",
    },
    {
      soupname: "Soupe Lentils",
      img: "./menuPhotos/soupe-lentilles-aux-herbes-hachees-craquelins.jpg",
      price: "18$",
    },
    {
      soupname: "Potato Soupe",
      img: "./menuPhotos/potato-soup-2152254_1280.jpg",
      price: "30$",
    },
  ]);
  const [salads, setSalads] = useState([
    {
      saladname: "Pasta Salad",
      img: "./menuPhotos/pasta-7209002_1280.jpg",
      price: "12$",
    },
    {
      saladname: "Fresh Salad",
      img: "./menuPhotos/salade-fraiche-tomates-au-poulet-legumes-verts-melanges-image-generee-par-ia.jpg",
      price: "20$",
    },
    {
      saladname: "Mexican Salad",
      img: "./menuPhotos/food-4825211_1280.jpg",
      price: "18$",
    },
    {
      saladname: "Thai Salad",
      img: "./menuPhotos/appetite-1238513_1280.jpg",
      price: "30$",
    },
  ]);
  const [hotDishes, setHotDishes] = useState([
    {
      HotDishname: "shellfish",
      img: "./menuPhotos/shellfish-2114006_1280.jpg",
      price: "12$",
    },
    {
      HotDishname: "Fav Pasta",
      img: "./menuPhotos/pasta-1264056_1280.jpg",
      price: "20$",
    },
    {
      HotDishname: "Posh Fish",
      img: "./menuPhotos/fish-8031138_1280.jpg",
      price: "18$",
    },
    {
      HotDisname: "Fish Pie",
      img: "./menuPhotos/salmon-518032_1280.jpg",
      price: "30$",
    },
  ]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const scrollIncrement = 100; // 100px aal imin wala aal isar ki tclicki yaany
  const scrollLeft = (ref) => {
    const container = ref.current; // nselecti l element
    if (container) {
      // idha kenou shih w mawjoud w defini
      const newPosition = scrollPosition - scrollIncrement; // postion jdida heya position eli feha taw - 100px khater aal isar
      container.scrollTo({ left: newPosition, behavior: "smooth" }); // container edheka aamel fih scroll lel isar lel new Position eli hsebneha f ligne eli 9bal
      setScrollPosition(newPosition); // nbadlou state bsh naamlou save lel position eli ahna feha taw
    }
  };

  const scrollRight = (ref) => {
    // nafs principe juste fel direction lokhra
    const container = ref.current;
    console.log(container);
    if (container) {
      const newPosition = scrollPosition + scrollIncrement;
      container.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
    console.log(ref)
  };
  const ref1=useRef(null);
  const ref2=useRef(null);
  const ref3=useRef(null);
  return (
    <>
      <body>
        <div className="slide-container swiper">
          <div className="slide-content">
            <div className="card-wrapper swiper-wrapper">
              <div className='prepreContainer'  >

              <div className='preContainer'>
                 <h1 className='MenuTitle'>Our Soups</h1>
                <div
                  className="food-container"
                  style={{
                    display: "flex",
                    maxWidth: "100%",
                    gap: "15px",
                    overflowX: "hidden",
                    padding: "20px 5px",
            
                    borderRadius: "10px",
                  }}
                  ref={ref1}
                 >
                
                {soupes.map((soup) => (
                  <FoodCard
                    name={soup.soupname}
                    price={soup.price}
                    img={soup.img}
                  />
                ))}
                <button
                className="swiper-button-next swiper-navBtn"
                onClick={()=>scrollRight(ref1)}
              >
                &gt;
              </button>
              <button
                className="swiper-button-prev swiper-navBtn"
                onClick={()=>scrollLeft(ref1)}
                >
                &lt;
              </button>
                </div>
               </div>
              </div>
              
              <div className='preContainer'>
                 <h1 className='MenuTitle'>Our salads</h1>
               <div
                className="food-container"
                style={{
                  display: "flex",
                  maxWidth: "100%",
                  gap: "15px",
                  overflowX: "auto",
                  padding: "20px 5px",
                  borderRadius: "10px",
                }}
                ref={ref2}
              >
                {salads.map((salad) => (
                  <FoodCard
                    name={salad.saladname}
                    price={salad.price}
                    img={salad.img}
                  />
                ))}
                <button
                className="swiper-button-next swiper-navBtn"
                onClick={()=>scrollRight(ref2)}
              >
                &gt;
              </button>
              <button
                className="swiper-button-prev swiper-navBtn"
                onClick={()=>scrollLeft(ref2)}
              >
                &lt;
              </button>
              </div>
              </div>
              
              <div className='preContainer'>
                 <h1 className='MenuTitle'>Our HotDishes</h1>
              <div
                className="food-container"
                style={{
                  display: "flex",
                  maxWidth: "100%",
                  gap: "15px",
                  overflowX: "auto",
                  padding: "20px 5px",
                  
                  borderRadius: "10px",
                }}
                ref={ref3} //hne hedhy heya ref lel div eli feha les cards
              >
                {hotDishes.map((hotDish) => (
                  <FoodCard
                    name={hotDish.HotDishname}
                    price={hotDish.price}
                    img={hotDish.img}
                  />
                ))}
                <button
                className="swiper-button-next swiper-navBtn"
                onClick={()=>scrollRight(ref3)}
              >
                &gt;
              </button>
              <button
                className="swiper-button-prev swiper-navBtn"
                onClick={()=>scrollLeft(ref3)}
              >
                &lt;
              </button>
              </div>
              </div>

              
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </body>

      <script src="//cdn.jsdelivr.net/gh/freeps2/a7rarpress@main/swiper-bundle.min.js"></script>

      <script src="//cdn.jsdelivr.net/gh/freeps2/a7rarpress@main/script.js"></script>
    </>
  );
};


export default Menus;

function FoodCard({ name, price, img }) {
  return (
    <div className="card swiper-slide" style={{ minWidth: "33%" }}>
      <div className="image-content">
       

        <div className="card-image">
        <img src={img} alt="" className="card-img" />
        </div>
      </div>

      <div className="card-content">
        <h2 className="name">{name}</h2>
        <p className="price">{price}</p>

        
      </div>
    </div>
  );
}