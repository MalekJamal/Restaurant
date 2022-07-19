"use strict";

//create an array to store all food object in it
const allFoods = [];
// global id varibale
let id = 1000;

//create a food constructor
function Food(foodId, foodName, type, price) {
  this.foodId = foodId;
  this.foodName = foodName;
  this.type = type;
  this.price = price;
  allFoods.push(this);
}

function genereteId() {
  return id++;
}

let formEl = document.getElementById("formId");
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let foodName = event.target.foodname.value;
  let foodType = event.target.foodtype.value;
  let foodPrice = event.target.foodprice.value;

  new Food(genereteId(), foodName, foodType, foodPrice);
  saveData();
}

// to save data from localStorage
function saveData() {
  localStorage.setItem("allFoods", JSON.stringify(allFoods));
}
