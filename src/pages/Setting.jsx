import React from 'react'
import "../pages/css/setting.css"

const Setting = () => {
  return (
    <div className='body3'>
      <div className="container3">
        <div className="item3">
        <main className="setting_main">
      <div className="setting_card">
    <h5 className='Setting_heading'>Setting</h5>
      </div>
      {/* Here is login of setting */}
<div><h5 className='Setting_login'>Log In Details</h5></div>

<div><p className='setting_email'>admin@globaleyet</p></div>
<div><p className='setting_password'>Password</p></div>
<div><button className="btn-success1">Changes Email address</button></div>
<div><button className="btn-success2">Changes Password</button></div>
<div className='Setting_hr'><hr/></div>

{/* Here is the language */}
<div><h5 className='Setting_language'>Language</h5></div>
<div><p className='Setting_planguage'>Preferred Language</p></div>
<div className="Setting_droupbox">
<form>
<select className="Setting_Name" id="Names">
    <option>Choose...</option>
    <option value="rigatoni">AAAAA</option>
  <option value="dave">BBBBB</option>
  <option value="pumpernickel">CCCCC</option>
  <option value="reeses">DDDDD</option>
</select>
</form>
</div>
<div className='Setting_hr1'></div>
<div>
  <h5 className='Setting_3'>Tax & Admin charge setting</h5>
  <p className='Setting_tax1'>Tax Setting</p>
  <p className='Setting_tax2'>Admin charge setting</p>
  <button className='change1'>change</button>
  <button className='change2'>change</button>
  <button className='change3'>Save changes</button>
  </div>
  
  <div className='change_hr'><hr/></div>

      </main>

        </div>
      </div>
      
    </div>
  )
}

export default Setting
