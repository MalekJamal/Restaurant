"use strict";

// get section from  html
let sectionEl = document.getElementById("tableSection");
// table
let tableEl = document.createElement("table");
//console.log(sectionEl);
// create an array to store all drinks objects
const foodArr = [];
console.log("Food Array " + foodArr);

function createTableHead() {
  //console.log("1. create a table head")

  //console.log(tableEl);
  tableEl.style.width = "100%";
  tableEl.style.fontSize = "30px";
  tableEl.style.backgroundColor = "#EADA5E";
  tableEl.style.borderRadius = "10px";
  tableEl.setAttribute("border", "1");
  let trEl = document.createElement("tr");
  // create table thead
  let theadIdEl = document.createElement("th");
  let theadNameEl = document.createElement("th");
  let theadTypeEl = document.createElement("th");
  let theadPiceEl = document.createElement("th");

  theadIdEl.textContent = "ID";
  theadNameEl.textContent = "Name";
  theadTypeEl.textContent = "Type";
  theadPiceEl.textContent = "Price";

  trEl.appendChild(theadIdEl);
  trEl.appendChild(theadNameEl);
  trEl.appendChild(theadTypeEl);
  trEl.appendChild(theadPiceEl);

  tableEl.appendChild(trEl);
  sectionEl.appendChild(tableEl);
}

let trace = 1;
// render method
function render() {
  // to create the table once
  if (trace <= 1) {
    createTableHead();
    trace++;
  }
  for (let i = 0; i < foodArr.length; i++) {
    let trEl = document.createElement("tr");
    // create table body
    let tdIdEl = document.createElement("td");
    let tdNameEl = document.createElement("td");
    let tdTypeEl = document.createElement("td");
    let tdPiceEl = document.createElement("td");
    //console.log("inside the for loop")
    tdIdEl.textContent = `${foodArr[i].foodId}`;
    tdNameEl.textContent = `${foodArr[i].foodName}`;
    tdTypeEl.textContent = `${foodArr[i].type}`;
    tdPiceEl.textContent = `${foodArr[i].price}`;

    trEl.appendChild(tdIdEl);
    trEl.appendChild(tdNameEl);
    trEl.appendChild(tdTypeEl);
    trEl.appendChild(tdPiceEl);
    tableEl.appendChild(trEl);
  }
}

// to get data from localStorage
function getData() {
  // to retrive data from localstorage
  let retrivedData = localStorage.getItem("allFoods");

  let parseData = JSON.parse(retrivedData);

  if (parseData !== null) {
    for (let i = 0; i < parseData.length; i++) {
      foodArr.push(parseData[i]);
    }
  }
  console.log(foodArr);
}
getData();
render();
