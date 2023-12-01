import React from "react";
import { useRef, useState } from "react";
import JsonToCsv from "react-json-to-csv";
import Papa from "papaparse";
import "./addadmin.css";
import Topnav from "./topnav";
import Sidenav from "./sidenav";
import delIcon from'../images/del-icon.png'

export default function Addadmin() {
  const fileInputRef = useRef(null);
  const [jsonData, setJsonData] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ name: "", email: "" });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAdmin((prevAdmin) => ({ ...prevAdmin, [name]: value }));
  };
  const handleAddAdmin = (event) => {
    event.preventDefault();
    if (newAdmin.name.trim() !== "" && newAdmin.email.trim() !== "") {
      setJsonData((prevData) => [
        ...prevData,
        { Name: newAdmin.name, Email: newAdmin.email },
      ]);
      setNewAdmin({ name: "", email: "" });
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target.result;
        parseCSV(contents);
      };
      reader.readAsText(file);
    }
  };

  const parseCSV = (csvContent) => {
    Papa.parse(csvContent, {
      header: true,
      skipEmptyLines: true,
      complete: (parsedData) => {
        const { data } = parsedData;

        if (data && Array.isArray(data) && data.length > 0) {
          const headers = Object.keys(data[0]);

          const newData = data.map((row) => {
            const rowData = {};
            headers.forEach((header) => {
              rowData[header] = row[header];
            });
            return rowData;
          });
          setJsonData((prevData) => [...prevData, ...newData]);
        }
      },
      error: (error) => {
        console.error("CSV Parsing Error:", error);
      },
    });
  };
  const handleDelete = (indexToDelete) => {
    const updatedData = jsonData.filter((_, index) => index !== indexToDelete);
    setJsonData(updatedData);
  };

  console.log(jsonData);
  return (
    <>
      <div className="addadminPage">
        <Topnav />
        <div className="ContainerWithSideNav">
          <Sidenav active="Admins" />
          <div className="addAdminPageContainer">
            <div className="manualcard">
              <form>
                <input
                  type="text"
                  placeholder="Enter New Admin Name"
                  name="name"
                  value={newAdmin.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Enter New Admin Email"
                  name="email"
                  value={newAdmin.email}
                  onChange={handleInputChange}
                  required
                />
                <button className="add-btn" onClick={handleAddAdmin}>
                  Add
                </button>
              </form>
              <input
                type="file"
                ref={fileInputRef}
                accept=".csv"
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />
              <button className="csv-btn" onClick={handleButtonClick}>
                Add Through .csv
              </button>
            </div>
            <div className="autoDataCard">
              {jsonData && jsonData.length > 0 ? (
                <div className="ListTable">
                  <table className="customTable">
                    <thead>
                      <tr>
                        <th>Sr#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jsonData.map((item, index) => (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? "evenRow" : "oddRow"}
                        >
                          <td>{index + 1}</td>
                          <td>{item.Name}</td>
                          <td>{item.Email}</td>
                          <td>
                            <button className="del-btn" onClick={() => handleDelete(index)}>
                              <img src={delIcon} alt="Loading" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="ConfirmBtn">
                    <button>Confirm</button>
                  </div>
                </div>
              ) : (
                <center>
                  <h1>Add Admin </h1>
                </center>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
