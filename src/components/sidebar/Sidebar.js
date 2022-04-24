import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  AttachMoney,
  BarChart,
  Apple,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Error,
} from "@material-ui/icons";
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
          <Link to = '/users' className = "link">
             <li className="sidebarItem ">
             
              <PermIdentity className="sidebarIcon" />
              Users
            </li>
          </Link>
            <Link to ='/products' className = "link">
            <li className="sidebarItem">
              <Apple className="sidebarIcon" />
              Products
            </li>
            </Link>
            <li className="sidebarItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarItem ">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarItem ">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarItem">
              <Error className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
