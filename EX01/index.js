// . checked = property that determines the checked state of an HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        //console.log("You are subscribed");
        subResult.textContent = "You are subscribed";
    }
    else {
        subResult.textContent = "You are NOT subscribed";
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying whit Visa`;
    }

    else if(masterCardBtn.checked){
      paymentResult.textContent = `You are paying whit MasterCard`;
    }

    else if(payPalBtn.checked){
      paymentResult.textContent = `You are paying whit PayPal`;
    }

    else{
      paymentResult.textContent = `You must select a payment type`;
    }
}