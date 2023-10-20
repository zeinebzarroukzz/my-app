import React from 'react'
import soupe1 from '../../assets/menuPhotos/soupe-lentilles-aux-herbes-hachees-craquelins.jpg'
import soupe2 from '../../assets/menuPhotos/soupe-legumes-citrouille-creme.jpg'
import soupe3 from '../../assets/menuPhotos/pumpkin-soup-3705294_1280.jpg'
import salad1 from '../../assets/menuPhotos/salade-fraiche-tomates-au-poulet-legumes-verts-melanges-image-generee-par-ia.jpg'
import salad2 from '../../assets/menuPhotos/pasta-7209002_1280.jpg'
import salad3 from '../../assets/menuPhotos/appetite-1238513_1280.jpg'
import hotDish1 from '../../assets/menuPhotos/fish-8031138_1280.jpg'
import hotDish2 from '../../assets/menuPhotos/shellfish-2114006_1280.jpg'
import hotDish3 from '../../assets/menuPhotos/salmon-518032_1280.jpg'
import './Menus.css'
const Menus = () => {
  return (
    <>
    <body>
      <div class="slide-container swiper">
          <div class="slide-content">
              <div class="card-wrapper swiper-wrapper">
                  <div class="card swiper-slide">
                      <div class="image-content">
                          <span class="overlay"></span>

                          <div class="card-image">
                             <img src="https://tinypic.host/images/2022/12/19/img_avatar.png" alt="" class="card-img"/>
                          </div>
                      </div>

                      <div class="card-content">
                          <h2 class="name">Mohamed Yousef
</h2>
                          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                          <button class="button">View More</button>
                      </div>
                  </div>
                  <div class="card swiper-slide">
                      <div class="image-content">
                          <span class="overlay"></span>

                          <div class="card-image">
                                 <img src="https://tinypic.host/images/2022/12/19/img_avatar.png" alt="" class="card-img"/>
                          </div>
                      </div>

                      <div class="card-content">
                          <h2 class="name">Mohamed Yousef
</h2>
                          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                          <button class="button">View More</button>
                      </div>
                  </div>
                  <div class="card swiper-slide">
                      <div class="image-content">
                          <span class="overlay"></span>

                          <div class="card-image">
                               <img src="https://tinypic.host/images/2022/12/19/img_avatar.png" alt="" class="card-img"/>
                          </div>
                      </div>

                      <div class="card-content">
                          <h2 class="name">Mohamed Yousef
</h2>
                          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                          <button class="button">View More</button>
                      </div>
                  </div>
                  <div class="card swiper-slide">
                      <div class="image-content">
                          <span class="overlay"></span>

                          <div class="card-image">
                                  <img src="https://tinypic.host/images/2022/12/19/img_avatar.png" alt="" class="card-img"/>
                          </div>
                      </div>

                      <div class="card-content">
                          <h2 class="name">Mohamed Yousef
</h2>
                          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                          <button class="button">View More</button>
                      </div>
                  </div>
              </div>
          </div>

          <div class="swiper-button-next swiper-navBtn"></div>
          <div class="swiper-button-prev swiper-navBtn"></div>
          <div class="swiper-pagination"></div>
      </div>
      
  </body>
  
 <script src="//cdn.jsdelivr.net/gh/freeps2/a7rarpress@main/swiper-bundle.min.js"></script>


  <script src="//cdn.jsdelivr.net/gh/freeps2/a7rarpress@main/script.js"></script>
    </>
  )
}

export default Menus