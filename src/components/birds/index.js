import React, { useState, useEffect } from "react";
import InputField from "../input-field";
import "./index.css";
import EditableForm from "../editableForm";

const Birds = (props) => {
  const [fetchData, setFetchData] = useState([]);
  const [focusID, setFocusId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  console.log("fetchData", fetchData);
  // console.log("focusID", focusID);

  function getData() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGVjYmIyOTE5MmY4NjEzMTNhMzhlZiIsImlhdCI6MTU5NDkwMTI3MSwiZXhwIjoxNTk0OTg3NjcxfQ.T-AzzPTYlmSUm42NBO9GM3A4DhLv3C_d_HnFXyGIuTU"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(
      "http://ec2-13-53-168-92.eu-north-1.compute.amazonaws.com:3002/api/v1/bird/?limit=60",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setFetchData(data.body));
  }

  const requestToDB = (method, object, id, token) => {
    // let token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGVjYmIyOTE5MmY4NjEzMTNhMzhlZiIsImlhdCI6MTU5NDk3OTYyMCwiZXhwIjoxNTk1MDY2MDIwfQ.ogVUW8DD5qHQzPE-kRA1TU5S0Y7lxaVc6thH2yqNBeM"
    );

    var raw = JSON.stringify(object);

    var requestOptions = {
      method: method,
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `http://ec2-13-53-168-92.eu-north-1.compute.amazonaws.com:3002/api/v1/bird/${
        id ? id : ""
      }`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  // const updateBird = (object, token) => {
  //   console.log("updateBird object:", object);
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   myHeaders.append(
  //     "Authorization",
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGVjYmIyOTE5MmY4NjEzMTNhMzhlZiIsImlhdCI6MTU5NDk3MDc4OSwiZXhwIjoxNTk1MDU3MTg5fQ.89AuuGM2azD3NrrIacwcuDr1aDFVoq3cnpkdVMqTFSI"
  //   );

  //   var raw = JSON.stringify(object);
  //   console.log("raw", raw);

  //   var requestOptions = {
  //     method: "PUT",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(
  //     `http://ec2-13-53-168-92.eu-north-1.compute.amazonaws.com:3002/api/v1/bird/${focusID}`,
  //     requestOptions
  //   )
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // };

  const setFocus = (id) => {
    setFocusId(id);
  };

  const filterObject = (id) => {
    let selectedBirdArray = fetchData.filter((birdObj) => birdObj.id === id);
    let selectedBird = selectedBirdArray[0];
    // setBirdInFocus(selectedBird);
    return selectedBird;
  };

  useEffect(() => {
    getData();
  }, [focusID]);

  let emptyObj = {
    description: "",
    habitat: "",
    interestingFacts: "",
    migration: "",
    name: "",
    seasonalBird: "",
    summer: "",
    winter: "",
    forest: "",
    water: "",
  };

  return (
    <div className="birds-container">
      <div className="menu-item-top">
        <div className="menu-item-title">Birds</div>
      </div>
      <div className="title-bar">
        <div className="title-all-birds">All birds</div>{" "}
        <div className="title-selected-birds">Selected bird</div>
        <button
          onClick={() => {
            setIsAdding(!isAdding);
          }}
        >
          {" "}
          + New bird{" "}
        </button>
      </div>
      <div className="birds-content">
        <div className="birds-selector-container">
          {fetchData.map((birdObj) => (
            <div
              className={
                birdObj.id === focusID ? "bird-item-focus" : "bird-item"
              }
              onClick={() => setFocus(birdObj.id)}
              key={birdObj.id}
            >
              {birdObj.name}
            </div>
          ))}
        </div>
        <div className="focus-container">
        
          {/* {focusID ? displayBird(focusID) : null} */}
          {/* {birdInFocus ? <EditableForm birdObject={birdInFocus}/> : <div>no bird selected </div>} */}
          {focusID ? (
            <EditableForm
              birdObject={filterObject(focusID)}
              update={(obj) => requestToDB("PUT",obj,focusID)}
            />
          ) : null}
        </div>

       
        <div className="add-container">
          {isAdding ? (
            <EditableForm
              birdObject={emptyObj}
              add={(obj) => requestToDB("POST", obj)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Birds;

// const fetchFromDB = () => {
//   // fetch("http://ec2-13-53-168-92.eu-north-1.compute.amazonaws.com:3002/api/v1/bird/")
//   //   .then((response) => response.json())
//   //   .then((data) => setFetchData({ data }));

//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.append(
//     "Authorization",
//     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGVjYmIyOTE5MmY4NjEzMTNhMzhlZiIsImlhdCI6MTU5NDgxMzY5NCwiZXhwIjoxNTk0OTAwMDk0fQ.qiriqOO0T1tJhwg2D6_kw-h95OcX0_I2WIgfBtcmSRQ"
//   );

//   var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   fetch(
//     "http://ec2-13-53-168-92.eu-north-1.compute.amazonaws.com:3002/api/v1/bird/",
//     requestOptions
//   )
//     .then((response) => response.text())
//     .then((data) => setFetchData({ data }))
//     .catch((error) => console.log("error", error));
// };
