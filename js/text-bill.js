// get a reference to the textbox where the bill type is to be entered
var billTypeTextElem = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtnElem = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
var callTotalOneElem = document.querySelector(".callTotalOne");
var smsTotalOneElem = document.querySelector(".smsTotalOne");
var totalOneElem = document.querySelector(".totalOne");

//box created for the call/sms to go to
var callsTotal = 0;
var smsTotal = 0;
//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElem.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75;
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalOneElem.innerHTML = callsTotal.toFixed(2);
    smsTotalOneElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalOneElem.innerHTML = totalCost.toFixed(2);

    if (totalCost > 50){
        // adding the danger class will make the text red
        totalOneElem.classList.add("danger");
    }
    else if (totalCost >= 30 && totalCost < 50){
        totalOneElem.classList.add("warning");
    }
}

addToBillBtnElem.addEventListener('click', textBillTotal);