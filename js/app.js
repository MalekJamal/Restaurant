'use strict';


//create an array to store all food object in it
const allFoods=[];
// global id varibale
let id=1000;
// get section from  html
let sectionEl =document.getElementById("tableSection");
// table
let tableEl = document.createElement('table');
//const sectionEl = document.getElementById('sectionId');
//create a food constructor 
function Food(foodId,foodName,type,price){
    this.foodId = foodId;
    this.foodName = foodName;
    this.type = type;
    this.price = price;
    allFoods.push(this);
}

function genereteId(){
    return id++;
}

let formEl = document.getElementById("formId");
formEl.addEventListener('submit',handleSubmit);

function handleSubmit(event){

   event.preventDefault();
   let foodName = event.target.foodname.value;
   let foodType = event.target.foodtype.value;
   let foodPrice = event.target.foodprice.value;

   let newFood = new Food(genereteId(),foodName,foodType,foodPrice);
   //console.log(allFoods);
   newFood.render();

}

function createTableHead(){
    
        
        console.log(tableEl);
        tableEl.style.width="100%";
        tableEl.style.fontSize="30px";
        tableEl.style.backgroundColor="#EADA5E";
        tableEl.style.borderRadius="10px";
        tableEl.setAttribute('border','1');
        let trEl=document.createElement('tr');
        // create table thead
        let theadIdEl = document.createElement('th');
        let theadNameEl = document.createElement('th');
        let theadTypeEl = document.createElement('th');
        let theadPiceEl = document.createElement('th');
        
        
        theadIdEl.textContent="ID";
        theadNameEl.textContent="Name";
        theadTypeEl.textContent="Type";
        theadPiceEl.textContent="Price";
    
        trEl.appendChild(theadIdEl);
        trEl.appendChild(theadNameEl);
        trEl.appendChild(theadTypeEl);
        trEl.appendChild(theadPiceEl);
        
        tableEl.appendChild(trEl);
        sectionEl.appendChild(tableEl);
   
}
let trace=1;
// render method
Food.prototype.render = function(){
    // to create the table once 
    if(trace<=1){ 
        createTableHead();
        trace++;
    }
   
    let trEl = document.createElement('tr');
    // create table body
    let tdIdEl = document.createElement('td');
    let tdNameEl = document.createElement('td');
    let tdTypeEl = document.createElement('td');
    let tdPiceEl = document.createElement('td');
    
    tdIdEl.textContent=`${this.foodId}`;
    tdNameEl.textContent=`${this.foodName}`;
    tdTypeEl.textContent=`${this.type}`;
    tdPiceEl.textContent=`${this.price}`;

    trEl.appendChild(tdIdEl);
    trEl.appendChild(tdNameEl);
    trEl.appendChild(tdTypeEl);
    trEl.appendChild(tdPiceEl);
    tableEl.appendChild(trEl);
    
}



