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

  return (
    <>
      <div className="AddformPage">
        <div className="formcontainer">
          <form>
            {titlecount.map((index, titleIndex) => (
              <div key={titleIndex}>
                <div className="titleContainer">
                  <input className="TitleInput" type="text" placeholder="Enter Title" />
                  {titleIndex > 0 ? (
                    <button className="removebtn" onClick={(e) => removeTitle(titleIndex, e)}>-</button>
                  ):<button className="add-btn" onClick={(e) => addTitle(e)}>+</button>}
                </div>
                {index.map((i, k) => (
                  <div className="questionContainer" key={k}>
                    <input className="QuestionInput" type="text" placeholder="Enter Question" />
                    {k === 0 ? (
                      <button className="addbtn" onClick={(e) => addQuestion(titleIndex, e)}>+</button>
                    ) : (
                      <button className="removebtn" onClick={(e) => removeQuestion(titleIndex, k, e)}>-</button>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </form>
        </div>
      </div>
    </>
  );
}
