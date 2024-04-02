import React from "react";
import "../pages/css/Report.css"

const Report = () => {
  return (
    <div className="body1">
      <div className="container1">
        <div className="item1">
          <h5 className="welcome1">Client</h5>
        </div>
        <main className="main1">
       <div className="Report_button">
       <button className="Report_button1">Revenue1</button>
       <button className="Report_button2">Revenue2</button>
       <button className="Report_button3">Revenue3</button>
       </div>

          <div className="car1d">
            <p className="paragraph_heading">Total Wallet Balance</p>
          <h3 className="card_no">$ 3,35,120</h3>
          </div>
          <div className="car2d">
          <p className="paragraph_heading1">Admin</p>
          <h3 className="card_no">$ 17,560</h3>
          </div>
          <div className="car3d">
          <p className="paragraph_heading2">Therapist</p>
            <h3 className="card_no">$ 317,560</h3>
          </div>
          <div className="car4d">


            <div className="report_cardbox1">
              <br/>
              Total
              <br/>
              <div><h4>$7,560</h4></div>
            </div>

            <div className="report_cardbox2">
              <br/>
             Admin Charge
              <br/>
              <div><h4>$7,560</h4></div>
            </div>
           
            <div className="report_cardbox3">
              <br/>
             Therapist Charge
              <br/>
              <div><h4>$7,560</h4></div>
            </div>
{/* Here is the droup down box */}

<div className="report_droupbox">
<form>
<select className="Names" id="Names">
    <option>Today</option>
    <option value="rigatoni">AAAAA</option>
  <option value="dave">BBBBB</option>
  <option value="pumpernickel">CCCCC</option>
  <option value="reeses">DDDDD</option>
</select>
</form>
</div>

<div className="report_cardbox4">
              <br/>
             Therapist Charge
              <br/>
              <div><h4>$7,560</h4></div>
            </div>

 <div className="report_cardbox5">
              <br/>
             Therapist Charge
              <br/>
              <div><h4>$7,560</h4></div>
            </div>
          </div>
<div className="report_cardbox6">
<h4 className="Report_revenu">Revenue</h4>



</div>
<div className="droup_down">
<form>
<select className="report_droupdown" id="Names">
    <option>Today</option>
    <option value="rigatoni">AAAAA</option>
  <option value="dave">BBBBB</option>
  <option value="pumpernickel">CCCCC</option>
  <option value="reeses">DDDDD</option>
</select>
</form>
</div>

{/* Here is the search bar */}

<div className='Report_search'>
<input type="text" id="ip2"/>
</div>

<div className="Report_Table">
<p className="Revenue_total">Total : 7</p>

<table width="1000" border="1" className="Report_table"> 
        <tr> 
            <th bgcolor="#384B5B">Date</th> 
            
            <th bgcolor="#384B5B">Total Therapist</th>
            <th bgcolor="#384B5B">Gross total</th> 
            <th bgcolor="#384B5B">Charge(10%)</th> 
            <th bgcolor="#384B5B">Therapist</th>   
        </tr> 
         
        <tr> 
            <td>24-02-2022	</td> 
            <td>25</td>
            <td>7560</td> 
            <td>756</td>
            <td>6804</td> 
             
        </tr> 
       
        <tr> 
            <td>23-02-2022</td> 
            <td>0</td> 
            <td>0</td> 
            <td>0</td> 
            <td>0</td> 
        </tr> 
    </table>

</div>


        </main>
      </div>
    </div>
  );
};

export default Report;
