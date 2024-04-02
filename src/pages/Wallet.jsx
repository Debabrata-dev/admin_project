import React from 'react'
import "../pages/css/Wallet.css"


const Wallet = () => {
  return (
    <div className='body'>
     <div className='container'>
    <div className='item'>
        <h5 className='wallet1'>Wallet request</h5>
    </div>
     </div>
     <main className="main">
      <div className='card4'>

  <div className='box'>
<p>Gross Total : 3000$</p>
  </div>
  <div className='box1'>
<p>Charge (10%) : 300$</p>
  </div>

<div className='btn4'>
<button className='wallet_btn4'>Appointments History</button>
</div>

<div className='search_bar3'>
<input type="text" id="ip2"/>
</div>

<div>
  <p className='waller_p'>Total 3</p>
  {/* <br/> */}
  <div className='wallet_table'>
  <table className='wallet_data'>
  <tr>
    <th>No</th>
    <th>Therapist Name</th>
    <th>Payment Type</th>
    <th>Amount</th>
    <th>Status</th>
    
  </tr>
  <tr>
    <td>1</td>
    <td>Jason M. Adams</td>
    <td>UPI</td>
    <td>170$</td>
    <td>
    <div>
      <p className='round_box'>Requested</p>
      <a href='aa'><button className='walletview_btn'>View</button></a>
    </div>
    </td>
  </tr>
  <tr>
  <td>2</td>
    <td>Vinu</td>
    <td>UPI</td>
    <td>200$</td>
    <td>
    <div>
    <p className='round_box'>Requested</p>
      <a href='ab'><button className='walletview_btn'>View</button></a>
    </div>
    </td>
  </tr>
</table>
  </div>
</div>

<div className='wallet_pages'>
<a href="#" className="previous">Previous</a>
<a href='#1' className='previous'>1</a>
<a href='#2' className='previous'>2</a>
<a href='#3' className='previous'>3</a>
<a href="#4" className="next">Next</a>
</div>


      </div>
      </main>
    </div>
  )
}

export default Wallet
