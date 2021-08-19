// get a reference to the textbox where the bill type is to be entered
var billTypeTextElem = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtnElem = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
var callTotalOneElem = document.querySelector(".callTotalOne");
var smsTotalOneElem = document.querySelector(".smsTotalOne");
var totalOneElem = document.querySelector(".totalOne")

var callsTotal = 0;
var smsTotal = 0;
var chageS=30;
var chage=50;

function textBillTotal(){
    var billTypeEntered = billTypeTextElem.value.trim();
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
if (billTypeEntered === "call"){
    callsTotal += 2.75;
}
else if (billTypeEntered === "sms"){
    smsTotal += 0.75;
}
// * add the appropriate value to the running total
callTotalOneElem.innerHTML = callsTotal.toFixed(2);
    smsTotalOneElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalOneElem.innerHTML = totalCost.toFixed(2);
// * add nothing for invalid values that is not 'call' or 'sms'.
if (totalCost > chage){
    // red
    totalOneElem.classList.add("danger");
    
}
//orange
else if (totalCost >= chageS && totalCost < chage){
    totalOneElem.classList.add("warning");
}

totalOneElem.innerHTML = "R" + totalCost.toFixed(2);
}

//add an event listener for when the add button is pressed
addToBillBtnElem.addEventListener('click', textBillTotal);
 