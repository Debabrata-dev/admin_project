import React from 'react'
import "../pages/css/Therapist_Details.css"
const Therapist_Details = () => {
  return (
    <div className='body'>
      <div className="container">
        <div className="item">
          <h5 className="welcome">Therapist Details</h5>
        </div>
      </div>

      <main className="main">
       <div className='card2'>
       <a><button className="but1">ApproveTherapist</button>
       <button className="but2">Add Therapist</button>
       <button className="but3">Inactive Therapist</button></a>
       </div>
{/* Search bar is here */}
<div><input type="text" id="ip2"/></div>

<div className='d_pages'>
<a href="#" className="previous">Previous</a>
<a href='#1' className='previous'>1</a>
<a href='#2' className='previous'>2</a>
<a href='#3' className='previous'>3</a>
<a href="#4" className="next">Next</a>
</div>

<div className='total'><p>Total : 0</p></div>
<div className='table_headeing'>
<table className="therapist">
  <tr>
    <th>No</th>
    <th>Name</th>
    <th>Type</th>
    <th>Status</th>
    <th>Profile</th>
  </tr>
  </table>
</div>



        </main>
    </div>
  )
}

export default Therapist_Details
