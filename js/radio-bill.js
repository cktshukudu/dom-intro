// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var callTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwoElem = document.querySelector(".totalTwo");
//var billItemTypeElem = document.querySelector(".billItemType");
//get a reference to the add button
var radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");


//create a variable that will keep track of the total bill
var callsTotals = 0;
var smsTotals = 0;
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function textBillTotal(){
    // get the value entered in the billType textfield
   // var billTypeEntered = checkedRadioBtnElem.value.trim();
    var checkedRadioBtnElem = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtnElem){
    
    // billItemType will be 'call' or 'sms'

    // update the correct total
    if (checkedRadioBtnElem.value === "call"){
        callsTotals += 2.75;
    }
    else if (checkedRadioBtnElem.value === "sms"){
        smsTotals += 0.75;
    }
    
}

    
    //update the totals that is displayed on the screen.
    callTotalTwoElem.innerHTML = callsTotals.toFixed(2);
    smsTotalTwoElem.innerHTML = smsTotals.toFixed(2);
    var totalCosts = callsTotals + smsTotals;
    totalTwoElem.innerHTML = totalCosts.toFixed(2);

    if (totalCosts > 50){
        // adding the danger class will make the text red
        totalTwoElem.classList.add("danger");
    }
    else if (totalCosts >= 30 && totalCosts < 50){
        totalTwoElem.classList.add("warning");
    }

}

radioBillAddBtnElem.addEventListener('click', textBillTotal);

