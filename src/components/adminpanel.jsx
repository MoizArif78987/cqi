import React from "react";
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Topnav from "./topnav";
import Sidenav from "./sidenav";
import "./adminpanel.css";
import { Pie } from "react-chartjs-2";

//for dummy data
import _ from "lodash";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Adminpanel() {
  const [forms, setForms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:4000/getforms");
        const responseData = await response.json();
        setForms(responseData);
        setIsLoading(false);
        console.log(responseData);
      } catch (error) {
        console.error("Error fetching forms:", error);
      }
    }
    fetchData();
  }, []);

  const generateData = () => {
    let randomNumber;
    const data = {
      labels: ["Positive", "Negative"],
      datasets: [
        {
          data: [(randomNumber = _.random(1, 100)), 100 - randomNumber],
          backgroundColor: ["#053872", "red"],
        },
      ],
    };
    return data;
  };

  const options = {};
  return (
    <>
      <div className="adminpanelPage">
        <Topnav />
        <div className="ContainerWithSideNav">
          <Sidenav active="Stats" />
          <div className="StatsPageContainer">
            <div className="surveygraphpanel">
              {isLoading ? (
                <div style={{display:"flex", justifyContent:"flex-start", alignItems:'center', marginLeft:'20px'}}>
                  <BeatLoader
                    color='#053872'
                    size={10}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              ) : (
                forms.map((form) => (
                  <div className="graphCard">
                    <div className="formname">
                      <p>{form.formTitle}</p>
                    </div>
                    <div className="graph">
                      <Pie data={generateData()} options={options} />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
