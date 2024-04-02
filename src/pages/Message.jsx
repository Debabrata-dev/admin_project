import React from "react";
import "../pages/css/Message.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Message = () => {
  return (
    <div className="body2">
      <div className="container2">
        <div className="item2">
          <h5 className="welcome2">Messages</h5>
        </div>
      </div>
      <main className="main2">
        <div className="Message_card1">
          {/* Here is the Message */}

          <div className="Message_card2">
            <div className="Message_droupbox">
              <form>
                <select className="Message_Name">
                  <option>Filter</option>
                  <option value="rigatoni">All</option>
                  <option value="dave">client</option>
                  <option value="pumpernickel">Therapist</option>
                </select>
              </form>
            </div>
            <div>
              <button className="Message_button">Broadband message</button>
            </div>
            <div className="Message_searchbar">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." className="search" />
                <button type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>

            <div className="account_bar1">
              <b className="message1">Name</b>
            </div>
            <div className="account_bar2">
            <b className="message2">Name</b>
            </div>
            
          </div>

          {/* Here message */}
          <div className="Message_card3">
            <div className="Message_profile">
             <h5 className="Heading_profile">Name</h5>
             <div className="dot_3"><MoreVertIcon/></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Message;
