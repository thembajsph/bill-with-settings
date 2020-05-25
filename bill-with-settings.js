//all my element reference on top 
var radioBillAddBtnElem = document.querySelector('.button-primary'); 

var updateSettingsBtnElem = document.querySelector('.buttonUpdateSettings');

//update settings number input 
var callCostSettingInpElem = document.querySelector('.callCostSettingInput');

var smsCostSettingInpElem = document.querySelector('.smsCostSettingInput');

var warningLevelSettingInpElem = document.querySelector('.warningLevelSettingInput');

var criticalLevelSettingInpElem = document.querySelector('.criticalLevelSettingInput');


var callTotalTwoElem = document.querySelector('.callTotalSettings');

var smsTotalTwoElem = document.querySelector('.smsTotalSettings');

var totalTwoElem = document.querySelector('.totalSettings');

//declare my totals variable on global scope to access its value to all my functions

var callsTotal = 0;
var smsTotal = 0;
var total = 0;

//Added some these here to keep the total updated and settings

var criticalLevelSettingInp = 0
var warningLevelSettingInp = 0
var callCostSettingInp = 0
var smsCostSettingInp = 0;
 
//function to update values coming from settings 
function updatedSettingsBtn() {
if (updateSettingsBtnElem) {
  
callCostSettingInp  = Number(callCostSettingInpElem.value);

smsCostSettingInp  = Number(smsCostSettingInpElem.value);

warningLevelSettingInp = Number(warningLevelSettingInpElem.value);

criticalLevelSettingInp = Number(criticalLevelSettingInpElem.value);

} 
};

//calculate the totals 
function calculateBtn(){
  
var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

//checking if the button is checked what should happen

if (checkedRadioBtn){
//  Getting the value from the radio button 
    var billItemType = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms';
  //this stops the counter when it reachies the critical level
  if(total < criticalLevelSettingInp){
    if (billItemType === 'call'){
      callsTotal += callCostSettingInp;
    }
     if (billItemType === 'sms'){
    smsTotal += smsCostSettingInp;
     }
}
}

  //calculating the total of both calls and sms 
  total = callsTotal + smsTotal
 
  //calling the add color function
  colorCode(total);

  //putting the results to html
  appedingToHtml();
 
};

//created a function for coloring my totals.
 function colorCode(total){

totalTwoElem.classList.remove("danger");
totalTwoElem.classList.remove("warning");

    if(total >= 
criticalLevelSettingInp) {
      totalTwoElem.classList.add("danger");
    }
   else if(total >= warningLevelSettingInp) {
      totalTwoElem.classList.add("warning");
   }
 };

//putting back all the results to html
function appedingToHtml(){
  
  callTotalTwoElem.innerHTML = callsTotal.toFixed(2);
  smsTotalTwoElem.innerHTML = smsTotal.toFixed(2);
  totalTwoElem.innerHTML = total.toFixed(2);
}
  
//trigering the click event

radioBillAddBtnElem.addEventListener('click', calculateBtn);

//triggering the update settings 

updateSettingsBtnElem.addEventListener('click', updatedSettingsBtn);



  


