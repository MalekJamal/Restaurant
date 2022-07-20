"use strict";

// get section from  html
let sectionEl = document.getElementById("tableSection");
// table
let tableEl = document.createElement("table");
// create an array to store all drinks objects
const foodArr = [];
const foodNames = [];
const foodPrices = [];
let fruitAndVegetables = [];
let starchyFood = [];
let dairy = [];
let protein = [];
let fat = [];

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
}
getData();
render();

function setType() {
  if (foodArr != null) {
    for (let i = 0; i < foodArr.length; i++) {
      switch (foodArr[i].type) {
        case "Fruit and vegetables":
          fruitAndVegetables.push(foodArr[i].type);
          break;
        case "Starchy food":
          starchyFood.push(foodArr[i].type);
          break;
        case "Dairy":
          dairy.push(foodArr[i].type);
          break;
        case "Protein":
          protein.push(foodArr[i].type);
          break;
        case "Fat":
          fat.push(foodArr[i].type);
          break;
      }
    }
  }
}
setType();

function pieChartJs() {
  const labels = [
    "Fruit and vegetables",
    "Starchy food",
    "dairy",
    "protein",
    "fat",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [
          fruitAndVegetables.length,
          starchyFood.length,
          dairy.length,
          protein.length,
          fat.length,
        ],
        backgroundColor: ["green", "red", "#F3f424", "blue", "#3AB4F2"],
        hoverOffset: 50,
      },
    ],
  };

  const config = {
    type: "pie",
    data: data,
  };

  const myChart = new Chart(document.getElementById("myChart"), config);
}

function setNamesAndPrices() {
  for (let i = 0; i < foodArr.length; i++) {
    foodNames.push(foodArr[i].foodName);
    foodPrices.push(foodArr[i].price);
  }
}
setNamesAndPrices();
function barChart() {
  const labels = [foodNames];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [foodPrices],
        backgroundColor: ["green", "red", "#F3f424", "blue", "#3AB4F2"],
        hoverOffset: 50,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
  };

  const myChart = new Chart(document.getElementById("myChart"), config);
}
pieChartJs();
