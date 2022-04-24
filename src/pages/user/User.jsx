import React from "react";
import "./user.css";

import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish
} from "@material-ui/icons";
import {Link} from 'react-router-dom';
import member4 from "../../components/widgetSmall/member4.jpeg";
const User = () => {
  return (
    <div className="user">
      <div className=" userTitleContainer ">
        <h1 className="userTitle">Edit User</h1>
        <Link to = '/newuser' >
           <button className="userAddButton">Create</button>
        </Link>
        
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={member4} alt="" className="userShowImg" />
            <div className="usershowTopTitle">
              <span className="userShowUsername">Anna Beker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeker99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">13.12.1995</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 78</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>User Name</label>
                <input
                  type="text"
                  placeholder="annabeker99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Beker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeker99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 234 567 89"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
             
              
            </div>
            <div className="userUpdateRight">
               <div className="userUpdateUpload">
                 <img src= {member4} alt="" className="userUpdateImg" />
                 <label htmlFor="file"><Publish className = "userUpdateIcon"/></label>
                 <input type="file" name="file" id="file" hidden />
               </div>
               <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
