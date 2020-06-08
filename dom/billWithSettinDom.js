//all my element reference on top 
var radioBillAddBtnElem = document.querySelector('.addButton');

var updateSettingsBtnElem = document.querySelector('.buttonUpdateSettings');

//update settings number input 
var callCostSettingInpElem = document.querySelector('.callCostSettingInput');

var smsCostSettingInpElem = document.querySelector('.smsCostSettingInput');

var warningLevelSettingInpElem = document.querySelector('.warningLevelSettingInput');

var criticalLevelSettingInpElem = document.querySelector('.criticalLevelSettingInput');


var callTotalTwoElem = document.querySelector('.callTotalSettings');

var smsTotalTwoElem = document.querySelector('.smsTotalSettings');

var totalTwoElem = document.querySelector('.totalSettings');

var phoneBillInstance = billWithSettings();

function calculateBtn() {

  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");


  if (checkedRadioBtn) {

    var radioValue = checkedRadioBtn.value

    if (radioValue === 'call') { phoneBillInstance.makeCall() }

    if (radioValue === 'sms') {
      phoneBillInstance.sendSms()
    }
     // calling my colour function from factory function
    totalTwoElem.classList.add(phoneBillInstance.totalClassName());
    
    
    //putting the results to html
    appedingToHtml();
    
  };
};

totalTwoElem.classList.remove("danger");
totalTwoElem.classList.remove("warning");


//putting back all the results to html
function appedingToHtml() {
  
  callTotalTwoElem.innerHTML = phoneBillInstance.getTotalCallCost().toFixed(2);
  smsTotalTwoElem.innerHTML = phoneBillInstance.getTotalSmsCost().toFixed(2);
  totalTwoElem.innerHTML = phoneBillInstance.getTotalCost().toFixed(2);

  // calling my colour function from factory function
  totalTwoElem.classList.add(phoneBillInstance.totalClassName());
 
};


//function to update values coming from settings 
function updatedSettingsBtn() {
  
  
  phoneBillInstance.setCallCost(Number(callCostSettingInpElem.value));

  phoneBillInstance.setSmsCost(Number(smsCostSettingInpElem.value));

  phoneBillInstance.setWarningLevel(Number(warningLevelSettingInpElem.value));

  phoneBillInstance.setCriticalLevel(Number(criticalLevelSettingInpElem.value));

}


  //trigering the click event

  radioBillAddBtnElem.addEventListener('click', calculateBtn);

  //triggering the update settings 

  updateSettingsBtnElem.addEventListener('click', updatedSettingsBtn);
