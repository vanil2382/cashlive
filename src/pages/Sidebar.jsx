import React from 'react';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Admin</a></li>
          <li><a href="#">Accounts</a></li>
          <li><a href="#">Payments</a></li>
          <li><a href="#">Invoice</a></li>
                  </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
