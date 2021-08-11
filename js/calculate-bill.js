//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal")
//get a reference to the billString
var billStringField = document.querySelector(".billString");


//create the function that will be called when the calculate button is pressed
function totalPhoneBill(billString){
//  * this function should read the string value entered - split it on a comma.
var billItems = billString.split(",");
//  * loop over all the entries in the the resulting list
var billTotal = 0;
for (var i=0;i<billItems.length;i++){
    var billItem = billItems[i].trim();
    if (billItem === "call"){
        billTotal += 2.75;
    }
    else if (billItem === "sms"){
        billTotal += 0.75;
    }
}

//  * check if it is a call or an sms and add the right amount to the overall total
var roundedBillTotal = billTotal.toFixed(2);
return roundedBillTotal;
}
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

function calculateBtnClicked(){
  
    var billString = billStringField.value;
    var roundedBillTotal = totalPhoneBill(billString);
    var currentTotal = Number(roundedBillTotal);

    billTotalElement.classList.remove("warning")
    billTotalElement.classList.remove("danger")

    if (currentTotal >= 30) {
        //make the total to be in red
        billTotalElement.classList.add("danger")
    } else if (currentTotal >= 20 && currentTotal < 30){
        //make the total to be in orange
        billTotalElement.classList.add("warning")
    }
    billTotalElement.innerHTML = roundedBillTotal;
}
//link the function to a click event on the calculate button
calculateBtn.addEventListener("click", calculateBtnClicked)

