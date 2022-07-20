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
new Food(genereteId(), "Burger", "Fat", 12);
new Food(genereteId(), "Cheese", "Dairy", 8);
new Food(genereteId(), "Soup", "Fruit and vegetables", 3);
new Food(genereteId(), "Mansuf", "Protein", 20);
new Food(genereteId(), "Bread", "Starchy food", 7);

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
  Swal.fire(
    "Good job!",
    `${foodName} Is Added With Price ${foodPrice} JD <br>Thank You!👨‍🍳`,
    "success"
  );
}

// to save data from localStorage
function saveData() {
  localStorage.setItem("allFoods", JSON.stringify(allFoods));
}
