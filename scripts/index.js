"use strict";

const tableBodyOutput = document.getElementById("tableBodyOutput");

const API_BASE_URL = "http://localhost:8081/api/";

window.onload = () => {
    loadAPI(API_BASE_URL);
}

function loadAPI(baseUrl){
    fetch(baseUrl + "courses")
    .then(response => response.json())
    .then(data => {
        data.forEach(populateTable);
    })
}


function populateTable(courseInfoObject) {
    let tr = document.createElement("tr");
    //course Name
    let courseName = document.createElement("td");
    courseName.innerHTML = courseInfoObject.courseName;
    tr.appendChild(courseName);
    //course Number
    let courseNumber = document.createElement("td");
    courseNumber.innerHTML = courseInfoObject.courseNum;
    tr.appendChild(courseNumber);

    //Course Department
    let courseDepartment = document.createElement("td");
    courseDepartment.innerHTML = courseInfoObject.dept;   
    tr.appendChild(courseDepartment);
    tableBodyOutput.appendChild(tr);

}