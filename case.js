
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field')
    const caseNumberFieldString = caseNumberField.value;
    const priviousCaseNumber = parseInt(caseNumberFieldString);

    let newCaseNumber;
    if (isIncrease) {
        newCaseNumber = priviousCaseNumber + 1;
    }
    else {
        newCaseNumber = priviousCaseNumber - 1;

    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalNumber(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseTotalPrice;
}

function calculateSubTotal() {
    const currentPhoneTotal = getTextElementById('phone-total')
    const currentCaseTotal = getTextElementById('case-total')
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;

}



document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalNumber(newCaseNumber)

    calculateSubTotal()




})

document.getElementById('btn-case-minus').addEventListener('click', function () {

    const newCaseNumber = updateCaseNumber(false)
    updateCaseTotalNumber(newCaseNumber)

    calculateSubTotal()


})