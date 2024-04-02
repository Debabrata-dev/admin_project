import React from 'react'
import "../pages/css/Client.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Client = () => {
  return (
    <div className='body'>
    <div className="container">
      <div className="item">
        <h5 className="client1">Client</h5>
      </div>
    </div>
    <main className="main_client">
<div className='card3'>
<p className='total_1'>Total : 10</p>

{/* Here is the table  */}
<div className='customer_table'>
<table className='client_table'>
  <tr>
    <th>No</th>
    <th>Date</th>
    <th>Name</th>
    <th>type</th>
    <th>Status</th>
    <th>Profile</th>
  </tr>
  <tr>
    <td>1</td>
    <td>24-Oct-2023</td>
    <td>Vinu</td>
    <td>individual</td>
    <td className='active_color'>active</td>
    <td>
      <a><button className="cd">view</button></a>
      <a className='three_dot'><MoreVertIcon/></a>
      </td>
    
  </tr>
  <tr>
  <td>1</td>
    <td>24-Oct-2023</td>
    <td>Vinu</td>
    <td>individual</td>
    <td className='active_color'>active</td>
    <td>
      <a><button className='cd'>view</button></a>
      <a className='three_dot'><MoreVertIcon/></a>
      
      </td>
  </tr>
</table>
</div>

{/* <div className='card3'>

  
</div> */}



</div>
    </main>
    </div>
  )
}

export default Client
