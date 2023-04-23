import React from 'react'
import "./Card.css"
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'


const Card = () => {
  return (
    
    <div><Navbar /><div class="ag-format-container">
    <div class="ag-courses_box">
      <div class="ag-courses_item">
        <Link to="/cv" class="ag-courses-item_link">
          <div class="ag-courses-item_bg"></div>
  
          <div class="ag-courses-item_title">
           Voici mon CV 
          </div>
  
          <div class="ag-courses-item_date-box">
            Start:
            <span class="ag-courses-item_date">
              04.11.2022
            </span>
          </div>
        </Link>
      </div>
  
      <div class="ag-courses_item">
        <Link to="/blog" class="ag-courses-item_link">
          <div class="ag-courses-item_bg"></div>
  
          <div class="ag-courses-item_title">
            Ici vous avez accès au blog
          </div>
  
          <div class="ag-courses-item_date-box">
            Start:
            <span class="ag-courses-item_date">
              04.11.2022
            </span>
          </div>
        </Link>
      </div>
  
      <div class="ag-courses_item">
        <Link to="/contact" class="ag-courses-item_link">
          <div class="ag-courses-item_bg"></div>
  
          <div class="ag-courses-item_title">
            Contactez-nous !
          </div>
  
          <div class="ag-courses-item_date-box">
            Start:
            <span class="ag-courses-item_date">
              04.11.2022
            </span>
          </div>
        </Link>
      </div>
  
      <div class="ag-courses_item">
        <Link to="/counter" class="ag-courses-item_link">
          <div class="ag-courses-item_bg"></div>
  
          <div class="ag-courses-item_title">
            The Counter !
          </div>
  
          <div class="ag-courses-item_date-box">
            Start:
            <span class="ag-courses-item_date">
              04.11.2022
            </span>
          </div>
        </Link>
      </div>
  
      <div class="ag-courses_item">
        <Link to="/list" class="ag-courses-item_link">
          <div class="ag-courses-item_bg"></div>
  
          <div class="ag-courses-item_title">
            My List
          </div>
  
          <div class="ag-courses-item_date-box">
            Start:
            <span class="ag-courses-item_date">
              30.11.2022
            </span>
          </div>
        </Link>
      </div>
  
      <div class="ag-courses_item">
        <Link to="/useEffectCompo" class="ag-courses-item_link">
          <div class="ag-courses-item_bg"></div>
  
          <div class="ag-courses-item_title">
            API from AppDrag :] 
          </div>
        </Link>
      </div>
  
      <div class="ag-courses_item">
        <Link to="/toogle" class="ag-courses-item_link">
          <div class="ag-courses-item_bg">
          </div>
          <div class="ag-courses-item_title">
            Toogle Button here
          </div>
        </Link>
      </div>
  
      <div class="ag-courses_item">
        <Link to="/exampleObject" class="ag-courses-item_link">
          <div class="ag-courses-item_bg"></div>
  
          <div class="ag-courses-item_title">
            Some Example of object
          </div>
  
          <div class="ag-courses-item_date-box">
            Start:
            <span class="ag-courses-item_date">
              31.10.2022
            </span>
          </div>
        </Link>
      </div>
  
    </div>
  </div></div>
  )
}

export default Card