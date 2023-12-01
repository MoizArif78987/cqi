import React from "react";
import { useState } from "react";
import "./addform.css";
import Topnav from "./topnav";

export default function Addform() {
  const [registeration, setRegisteration] = useState(false);
  const [electives, setElectives] = useState([]);
  const [titlecount, setTitlecount] = useState([[1]]);
  const [selectedOption, setSelectedOption] = useState("Student");
  const [formData, setFormData] = useState({
    formTitle: "",
    category: selectedOption,
    titles: [],
  });

  const addTitle = (e) => {
    e.preventDefault();
    setTitlecount([...titlecount, [1]]);
  };

  const addQuestion = (titleIndex, e) => {
    e.preventDefault();
    const updatedTitlecount = [...titlecount];
    updatedTitlecount[titleIndex].push(1);
    setTitlecount(updatedTitlecount);
  };

  const removeQuestion = (titleIndex, questionIndex, e) => {
    e.preventDefault();
    const updatedTitlecount = [...titlecount];
    updatedTitlecount[titleIndex].splice(questionIndex, 1);
    setTitlecount(updatedTitlecount);
  };

  const removeTitle = (titleIndex, e) => {
    e.preventDefault();
    const updatedTitlecount = [...titlecount];
    updatedTitlecount.splice(titleIndex, 1);
    setTitlecount(updatedTitlecount);
  };

  const handleRadioChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedOption(selectedCategory);
      setFormData((prevFormData) => ({
      ...prevFormData,
      category: selectedCategory,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith("title")) {
      const titleIndex = parseInt(name.substring(5));
      const updatedTitles = [...formData.titles];
      updatedTitles[titleIndex] = {
        ...updatedTitles[titleIndex],
        title: value,
      };
      setFormData({ ...formData, titles: updatedTitles });
    } else if (name.startsWith("question")) {
      const titleIndex = parseInt(name.substring(8, name.indexOf("_")));
      const questionIndex = parseInt(name.substring(name.indexOf("_") + 1));

      const updatedTitles = [...formData.titles];
      const titleObject = updatedTitles[titleIndex] || {};
      const updatedQuestions = titleObject.questions || [];

      let isRatingType;

      if (type === "checkbox") {
        if (checked) {
          isRatingType = true;
        } else {
          isRatingType = false;
        }
      }

      const questionObject = {
        text: value,
        ResponseType: isRatingType ? "rating" : "text",
      };

      updatedQuestions[questionIndex] = questionObject;
      titleObject.questions = updatedQuestions;
      updatedTitles[titleIndex] = titleObject;

      setFormData({ ...formData, titles: updatedTitles });
    }
    else if(name.startsWith("checkbox"))
    {
      const titleIndex = parseInt(name.substring(8, name.indexOf("_")));
      const questionIndex = parseInt(name.substring(name.indexOf("_") + 1));

      const updatedTitles = [...formData.titles];
      const titleObject = updatedTitles[titleIndex] || {};
      const updatedQuestions = titleObject.questions || [];

      let isRatingType;

      if (type === "checkbox") {
        if (checked) {
          isRatingType = true;
        } else {
          isRatingType = false;
        }
      }

      const questionObject = {
        text: updatedQuestions[questionIndex]?.text || '',
        ResponseType: isRatingType ? "rating" : "text",
      };

      updatedQuestions[questionIndex] = questionObject;
      titleObject.questions = updatedQuestions;
      updatedTitles[titleIndex] = titleObject;

      setFormData({ ...formData, titles: updatedTitles });

    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const HandleElectives = (e) => {
    var number = e.target.value;
    setElectives([]);
    var arr = [];
    for (var i = 0; i < number; i++) {
      arr.push(1);
    }
    setElectives(arr);
    if (number == 0) {
      setElectives([]);
    }
  };

  const HandleSurveyFormSubmit = async (event) => {
    event.preventDefault();
    if (
      formData.formTitle == "" ||
      formData.titles.title == "" ||
      formData.titles.questions == []
    ) {
      window.alert("Please Enter Data First");
    } else {
      
      console.log(formData);
      try {
        const response = await fetch("http://localhost:4000/addforms", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to submit the data");
        }

        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  return (
    <>
      <div className="addformPage">
        <Topnav />
        <div className="addformcontainer">
          <div className="tabsContainer">
            <div className="tabs">
              <div
                className={`tab ${registeration ? "active" : ""}`}
                onClick={() => {
                  setRegisteration(true);
                }}
              >
                <h4>Subject Registration</h4>
              </div>
              <div
                className={`tab ${registeration ? "" : "active"}`}
                onClick={() => {
                  setRegisteration(false);
                }}
              >
                <h4>Survey</h4>
              </div>
            </div>
          </div>

          {/* Forms */}
          {registeration ? (
            // Registration Form
            <div className="RegitrationContainer">
              <form>
                <input
                  type="number"
                  placeholder="Enter the number of total elective Subjects"
                  className="numbeript"
                  id="subjects"
                  onChange={(e) => {
                    HandleElectives(e);
                  }}
                />
                <input
                  type="number"
                  className="numbeript"
                  placeholder="Enter the number of elctives that can be selected"
                />
                {electives != []
                  ? electives.map((i, k) => (
                      <div className="subjectDiv">
                        <input
                          className="sub"
                          type="text"
                          placeholder="Enter the Name of Subjects"
                        />
                        <input
                          className="sub"
                          type="number"
                          placeholder="Enter the number of available seats"
                        />
                      </div>
                    ))
                  : null}
                {electives != [] ? (
                  <button className="submit-btn">Submit</button>
                ) : null}
              </form>
            </div>
          ) : (
            //   Survey Forms
            <div className="surveyContainer">
              <form>
                <div className="FormSpecs">
                  <div className="titleInput">
                    <center>
                      <input
                        type="text"
                        name="formtitle"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            formTitle: e.target.value,
                          });
                        }}
                        id=""
                        placeholder="Enter the title for form"
                      />
                    </center>
                  </div>

                  <div className="category">
                    <label>
                      <input
                        type="radio"
                        value="Student"
                        checked={selectedOption === "Student"}
                        onChange={handleRadioChange}
                        required
                      />
                      Student
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="Final Year Student"
                        checked={selectedOption === "Final Year Student"}
                        onChange={handleRadioChange}
                      />
                      Final Year Student
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="Alumni"
                        checked={selectedOption === "Alumni"}
                        onChange={handleRadioChange}
                      />
                      Alumni
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="Organization"
                        checked={selectedOption === "Organization"}
                        onChange={handleRadioChange}
                      />
                      Organization
                    </label>
                  </div>
                </div>

                {titlecount.map((index, titleIndex) => (
                  <div key={titleIndex}>
                    <div className="titleContainer">
                      <input
                        className="TitleInput"
                        type="text"
                        name={`title${titleIndex}`}
                        placeholder="Enter Title"
                        onChange={handleInputChange}
                        required
                      />
                      {titleIndex > 0 ? (
                        <button
                          className="removebtn"
                          onClick={(e) => removeTitle(titleIndex, e)}
                        >
                          -
                        </button>
                      ) : (
                        <button
                          className="add-btn"
                          onClick={(e) => addTitle(e)}
                        >
                          +
                        </button>
                      )}
                    </div>
                    {index.map((i, k) => (
                      <div className="questionContainer" key={k}>
                        <div className="checkBox">
                          <label htmlFor="">Rating Type ?</label>
                          <input
                            type="checkbox"
                            name={`checkbox${titleIndex}_${k}`}
                            onChange={handleInputChange}
                          />
                        </div>
                        <input
                          className="QuestionInput"
                          type="text"
                          name={`question${titleIndex}_${k}`}
                          placeholder="Enter Question"
                          onChange={handleInputChange}
                          required
                        />
                        {k === 0 ? (
                          <button
                            className="addbtn"
                            onClick={(e) => addQuestion(titleIndex, e)}
                          >
                            +
                          </button>
                        ) : (
                          <button
                            className="removebtn"
                            onClick={(e) => removeQuestion(titleIndex, k, e)}
                          >
                            -
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                ))}

                <button
                  className="submit-btn"
                  onClick={(event) => {
                    HandleSurveyFormSubmit(event);
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
