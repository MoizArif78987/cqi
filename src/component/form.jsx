import React, { useState } from "react";
import "./form.css";

export default function Form() {
  const [percentage, setPercentage] = useState(20);
  return (
    <>
      <div className="FormPage">
        <div className="header">
          <h1>Form Title</h1>
        </div>
        <div className="FormContainer">
          <div className="FormQuestions">
            <div className="TextItems">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              nostrum nulla molestias dolorem assumenda eaque quos reiciendis
              quaerat dolorum eum asperiores, quia iste atque illo magnam. Ipsa
              exercitationem porro placeat debitis quasi eaque?
            </div>
            <div className="ProgressBars">
              <div class="bar-bg">
                {percentage >= 20 ? <div class="bar-fill" id="1" style={{backgroundColor: "#5E5DA8"}} onClick={()=>{setPercentage(20)}}  >
                </div> : <div class="bar-fill" id="1" style={{backgroundColor: "transparent"}} onClick={()=>{setPercentage(20)}}  >
                </div> }

                {percentage >= 40 ? <div class="bar-fill" id="2" style={{backgroundColor: "#5E5DA8"}} onClick={()=>{setPercentage(40)}}  >
                </div> : <div class="bar-fill" id="2" style={{backgroundColor: "transparent"}} onClick={()=>{setPercentage(40)}}  >
                </div> }

                {percentage >= 60 ? <div class="bar-fill" id="3" style={{backgroundColor: "#5E5DA8"}} onClick={()=>{setPercentage(60)}}  >
                </div> : <div class="bar-fill" id="3" style={{backgroundColor: "transparent"}} onClick={()=>{setPercentage(60)}}  >
                </div> }

                {percentage >= 80 ? <div class="bar-fill" id="4" style={{backgroundColor: "#5E5DA8"}} onClick={()=>{setPercentage(80)}}  >
                </div> : <div class="bar-fill" id="4" style={{backgroundColor: "transparent"}} onClick={()=>{setPercentage(80)}}  >
                </div> }

                {percentage >= 100 ? <div class="bar-fill" id="5" style={{backgroundColor: "#5E5DA8"}} onClick={()=>{setPercentage(100)}}  >
                </div> : <div class="bar-fill" id="5" style={{backgroundColor: "transparent"}} onClick={()=>{setPercentage(100)}}  >
                </div> }
              
              </div>
              <div className="Percentage">
                <h3>{percentage}%</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
