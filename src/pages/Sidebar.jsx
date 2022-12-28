import React from 'react';
import { Link } from "react-router-dom";
import "./Sidebar.css";
import CommentBox from './CommentBox';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {/* <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Accounts</a></li>
          <li><a href="#">Payments</a></li>
          <li><a href="#">Invoice</a></li>
  <li><a href="#">Admin</a></li> */}
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/accounts">Accounts</Link></li>
          <li><Link to="/Payments">Payments</Link></li>
          <li><Link to="/Invoices">Invoices</Link></li>
          <li><Link to="/Admin">Admin</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/CommentBox">Leave comments</Link></li>
                 </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
