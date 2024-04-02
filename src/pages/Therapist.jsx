import React from "react";
import Sidebar from "../Components/Sidebar";
import "../pages/css/Therapist.css";

const Therapist = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="item">
          <h5 className="welcome1">Therapist </h5>
        </div>
      </div>
  
      <main className="main">
        <div className="card1">

          {/* Button is here */}
          <div class="btn-group">
            <button>Individual</button>
            <button>Couple</button>
            <button>Parent</button>
            <button>Teen</button>
          </div>
<hr className="new1"></hr>

<div className="btn">
  <button className="btn btn-success">Add</button>
</div>


<br/>
{/* Table is here */}
<div className="customer_table">
<table id="customers">
  <tr>
    <th>S.No	</th>
    <th>Speciality </th>	
    <th>Action</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Depression</td>
    <td>
    <button className="btn1">edit</button>
    <button className="btn2">delete</button>
    </td>
  </tr>
  <tr>
    <td>2</td>
    <td>Stress and anxiety dynamics	</td>
    <td>
    <button className="btn1">edit</button>
    <button className="btn2">delete</button>
    </td>
  </tr>
  <tr>
    <td>3</td>
    <td>Stress and anxiety dynamics	</td>
    <td>
    <button className="btn1">edit</button>
    <button className="btn2">delete</button>
    </td>
  </tr>
  <tr>
    <td>4</td>
    <td>Stress and anxiety dynamics	</td>
    <td>
    <button className="btn1">edit</button>
    <button className="btn2">delete</button>
    </td>
  </tr>
  <tr>
    <td>5</td>
    <td>Stress and anxiety dynamics	</td>
    <td>
    <button className="btn1">edit</button>
    <button className="btn2">delete</button>
    </td>
  </tr>
</table>
</div>
      
        </div>
      </main>
    </div>
  );
};

export default Therapist;
