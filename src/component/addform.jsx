import React, { useState } from "react";
import "./addform.css";

export default function Addform() {
  const [titlecount, setTitlecount] = useState([[1]]);

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

  const [selectedOption, setSelectedOption] = useState("Student");
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="AddformPage">
        <div className="formcontainer">
          <form>
            
            <div className="FormSpecs">
              <div className="titleInput">
                <center>
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{
                      height: "60px",
                      width: "50%",
                      background: "transparent",
                      color: "white",
                      border: "1px solid white",
                      borderRadius: "20px",
                      fontSize: "35px",
                      fontWeight: "800",
                      letterSpacing: "5px",
                      marginTop: "10px",
                      textAlign: "center",
                    }}
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
                    placeholder="Enter Title"
                  />
                  {titleIndex > 0 ? (
                    <button
                      className="removebtn"
                      onClick={(e) => removeTitle(titleIndex, e)}
                    >
                      -
                    </button>
                  ) : (
                    <button className="add-btn" onClick={(e) => addTitle(e)}>
                      +
                    </button>
                  )}
                </div>
                {index.map((i, k) => (
                  <div className="questionContainer" key={k}>
                    <input
                      className="QuestionInput"
                      type="text"
                      placeholder="Enter Question"
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

            <button className="submit-btn">Submit</button>

          </form>
        </div>
      </div>
    </>
  );
}
