import React from "react";
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { Link } from "react-router-dom";
import Topnav from "./topnav";
import Sidenav from "./sidenav";
import "./forms.css";
import addbtn from "../images/addbtn.png";

export default function Forms() {
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

  return (
    <>
      <div className="formsPage">
        <Topnav />
        <div className="ContainerWithSideNav">
          <Sidenav active="Forms" />
          <div className="formPageContainer">
            <div className="cardContainer">
              {/* Add Form Card */}
              {isLoading ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "20px",
                  }}
                >
                  <BeatLoader
                    color="#053872"
                    size={10}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              ) : (
                forms.map((form) => (
                  <Link
                    className="cardLink"
                     key={form.form_id}
                     to={`/form/${form.form_id}`}
                    style={{ textDecoration: "none", color: "#053872" }}
                  >
                    <div className="card">
                      <div className="cardtitle">
                        <h4>{form.formTitle}</h4>
                      </div>
                      <div className="cardDescription">
                        <h5>{form.category}</h5>
                      </div>
                    </div>
                  </Link>
                ))
              )}
              <Link to="/addform" className="cardLink">
                <div className="card">
                  <div className="cardimg">
                    <img src={addbtn} alt="Loading" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
