
import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./Dashboard.css";

function Dashboard() {

const [state, setState] = useState({
    options: {
      // colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "People Born",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "People Died",
        data: [3, 60, 35, 80, 49, 70, 20, 81],
      },
    ],
  });

  return (
        <div className="Dashboard">
      <h1>
        Dashboard <i class="fas fa-user"></i>{" "}
      </h1>
      <div className="row">
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="450" />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="450" />
        </div>
      </div>
    </div>
    
    );
  }

export default Dashboard;
