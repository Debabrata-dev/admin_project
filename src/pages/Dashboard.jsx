import React from 'react'
import '../pages/css/Dashboard.css'
import S from "../image/stethoscope.png"
import C from "../image/Client.png"
import Graph from './graph'
import LineGraph from "./LineGraph"
import Calender from "./Calender"



const Dashboard = () => {
  return (
    <div className='body'>
      <div className='container'>
        <div className='item'><h5 className='welcome'>Hi welcome back!</h5></div>
      </div>
    
      <main className="main">
        <div className='card'>
          <br/>
          <div className="icon-st">
            <img src={S} alt="" />
          </div>
        <h5 className='title'>Therapist</h5>
        <br />
          <div className="icon-Therapist">
            <h2>0</h2>
          </div>
        </div>

        <div className='card'>
          <br/>
          <div className="icon-st">
            <img src={C} alt="" />
          </div>
          <h5 className='title'>Client</h5>
        <br />
          <div className="icon-Therapist">
            <h2>1</h2>
          </div>
        </div>

        <div className='card'>
        <h5>Weekly Activity</h5>
     
          
        {/* <Graph/> */}
       
        </div>

        <div className='card'>
        <h4>Individual</h4>
        </div>

        <div className='card'>
         <h4>Couples</h4>
        </div>

        <div className='card'>
        <h4>Parents</h4>
        </div>
        
        <div className='card'>
        <LineGraph/>
        </div>

        <div className='card'>
  
        </div>

        
      </main>
    </div>
  )
}

export default Dashboard
