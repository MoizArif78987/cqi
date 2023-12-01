import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import "./form.css";

export default function Form() {
  const { form_id } = useParams();
  const [percentages, setPercentages] = useState([]);
  const [formdata, setFormdata] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const response = await fetch(
  //           `http://localhost:4000/getformdata/${form_id}`
  //         );
  //         const responseData = await response.json();
  //         setFormdata(responseData);
  //         setIsLoading(false);

  //         const initialPercentages = responseData.titles.map((topic) =>
  //           Array(topic.questions.length).fill(20)
  //         );
  //         setPercentages(initialPercentages);

  //         console.log(responseData.titles);
  //       } catch (error) {
  //         console.error("Error fetching form data:", error);
  //         setIsLoading(false);
  //       }
  //     }

  //     fetchData();
  //   }, [form_id]);

  const updatePercentage = (topicIndex, questionIndex, value) => {
    setPercentages((prevPercentages) => {
      const newPercentages = [...prevPercentages];
      newPercentages[topicIndex][questionIndex] = value;
      return newPercentages;
    });
  };
  return (
    <>
      {isLoading ? (
        <div className="FormPage">
          <div
            style={{
              height:'100%',
              width:'100%'  ,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <BeatLoader
              color="#053872"
              size={10}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      ) : (
        <div className="FormPage">
          <div className="header">
            <h1>{formdata.formTitle}</h1>
          </div>

          <div className="FormContainer">
            {formdata.titles.map((topic, topicIndex) => (
              <div
                key={topic.title}
                className="Topic"
                style={{ marginLeft: "20px" }}
              >
                <h1>{topic.title}</h1>
                <div className="FormQuestions">
                  {topic.questions.map((question, questionIndex) => (
                    <div key={questionIndex} className="QuestionContainer">
                      <div className="TextItems">
                        {Object.values(question).slice(0, -1).join("")}
                      </div>
                      <div
                        className="ProgressBars"
                        id={`progress-${topicIndex}-${questionIndex}`}
                      >
                        <div className="bar-bg">
                          {[20, 40, 60, 80, 100].map((percentageValue) => (
                            <div
                              key={percentageValue}
                              className="bar-fill"
                              id={`section${percentageValue}`}
                              style={{
                                backgroundColor:
                                  percentages[topicIndex][questionIndex] >=
                                  percentageValue
                                    ? "#5E5DA8"
                                    : "transparent",
                              }}
                              onClick={() =>
                                updatePercentage(
                                  topicIndex,
                                  questionIndex,
                                  percentageValue
                                )
                              }
                            ></div>
                          ))}
                        </div>
                        <div className="Percentage">
                          <h3>{percentages[topicIndex][questionIndex]}%</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <button className="submit-btn">SUBMIT</button>
          </div>
        </div>
      )}
    </>
  );
}
