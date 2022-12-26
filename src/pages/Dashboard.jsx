
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
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
      // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      },
    },
    series: [
      {
        name: "Account Payments",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 60, 70,33,23],
      },
      {
        name: "Card Payments",
        data: [3, 60, 35, 80, 49, 70, 20, 81, 33, 45, 47, 50],
      },
    ],
  });

  return (
        <div className="Dashboard">
      <h1>
        Dashboard Monthly <i class="fas fa-user"></i>{" "}
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
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="radar"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="histogram"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="scatter"
            width="450"
          />
        </div>
      </div>
    </div>
    
    );
  }

export default Dashboard;
