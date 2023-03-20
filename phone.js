function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field')
    const phoneNumberFieldString = phoneNumberField.value;
    const priviousPhoneNumber = parseInt(phoneNumberFieldString);

    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = priviousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = priviousPhoneNumber - 1;

    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhoneTotalNumber(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneTotalPrice;
}

// function getTextElementById(elementId) {
//     const phoneTotalElement = document.getElementById(elementId)
//     const currentPhoneTotalString = phoneTotalElement.innerText
//     const currentPhoneTotal = parseInt(currentPhoneTotalString)
//     return currentPhoneTotal;

// }

// function calculateSubTotal() {
//     const currentPhoneTotal = getTextElementById('phone-total')
//     const currentCaseTotal = getTextElementById('case-total')
//     const currentSubTotal = currentPhoneTotal + currentCaseTotal;

//     const subTotalElement = document.getElementById('sub-total');
//     subTotalElement.innerText = currentSubTotal;

// }


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalNumber(newPhoneNumber)

    //calculate total
    calculateSubTotal()

})

document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const newPhoneNumber = updatePhoneNumber(false)
    updatePhoneTotalNumber(newPhoneNumber)

    calculateSubTotal()

})