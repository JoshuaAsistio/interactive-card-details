const cardHolder = document.getElementById('input-user');
const cardNumber = document.getElementById('input-card-number');
const expmonth = document.getElementById('month');
const expYear = document.getElementById('year');
const expCvc = document.getElementById('cvc');
const confirmButton = document.getElementById('confirm');
const form = document.getElementById('form');
const cardholderNameError = document.getElementById('cardholder-name-error');
const cardNumberError = document.getElementById('card-number-error');
const expDateError = document.getElementById('expdate-error');
const cardNumberInput = document.getElementById('card-number');
const cardHolderInput = document.getElementById('user');
const month = document.getElementById('exp-month');
const year = document.getElementById('exp-year');
const cvc = document.getElementById('number');
const completeState = document.getElementById('complete-state');
const continuebutton = document.getElementById('continue-button');


form.addEventListener('submit', e => {
    let messages = [];

    //cardHolder validation
    if (cardHolder.value === '' || cardHolder.value === null) {
        messages.push('Cardholder Name is required');
        cardholderNameError.textContent = 'Cardholder name is required';
        cardHolder.style.border = '1px solid hsl(0, 100%, 66%)';
    } else if (cardHolder.value.length > 0) {
        const filteredCardHolder = cardHolder
            .value
            .split('')
            .filter(a => {
            return a.match(/[0-9]/);
            })
        
        if (filteredCardHolder.length > 0) {
            messages.push('Wrong format, letters only');
            cardholderNameError.textContent = 'Wrong format, letters only.';
            cardHolder.style.border = '1px solid hsl(0, 100%, 66%)';
        } 
    } else if (cardHolder.value.length > 19) {
            messages.push('Too many characters');
            cardholderNameError.textContent = 'Too many characters';
            cardHolder.style.border = '1px solid hsl(0, 100%, 66%)';
    }
    //-------------------------------------------------------

    //cardNumber validation
    if (cardNumber.value === '') {
        messages.push('Card Number can\'t be empty.');
        cardNumberError.textContent = "Card Number can't be empty.";
        cardNumber.style.border = '1px solid hsl(0, 100%, 66%)';
    } else if (cardNumber.value.length !== 0) {
        const filteredCardNumber = cardNumber
            .value
            .split('')
            .filter(a => {
            return a.match(/[a-zA-Z]/);
            });
        
        if (filteredCardNumber.length > 0) {
            messages.push('Wrong format, Numbers only');
            cardNumberError.textContent = 'Wrong format, numbers only';
            cardNumber.style.border = '1px solid hsl(0, 100%, 66%)';
        }

        if (cardNumber.value.length > 19) {
            messages.push('Too many characters');
            cardNumberError.textContent = 'Too many characters';
            cardNumber.style.border = '1px solid hsl(0, 100%, 66%)';
        }
    }
    //----------------------------------------------------------

    //expiry date validation
    //month
    if (expmonth.value === '' || expmonth.value === null) {
        messages.push('Too many characters');
        expDateError.textContent = 'Expiry date can\'t be empty.';
        expmonth.style.border = '1px solid hsl(0, 100%, 66%)';
    } else if (expmonth.value.length > 0) {
        const filteredExpMonth = expmonth
            .value
            .split('')
            .filter(a => {
            return a.match(/[a-zA-Z]/);
            });
        
        if (filteredExpMonth.length > 0) {
            messages.push('Too many characters');
            expDateError.textContent = 'Wrong format, numbers only';
            expmonth.style.border = '1px solid hsl(0, 100%, 66%)';
        }
    }

    if (expYear.value === '' || expYear.value === null) {
        messages.push('Too many characters');
        expDateError.textContent = 'Expiry date can\'t be empty.';
        expYear.style.border = '1px solid hsl(0, 100%, 66%)';
    }

    if (expCvc.value === '' || expCvc.value === null) {
        messages.push('Too many characters');
        expDateError.textContent = 'Expiry date can\'t be empty.';
        expCvc.style.border = '1px solid hsl(0, 100%, 66%)';
    }
    //-----------------------------
    //---------------------------------------------------------

    if (messages.length > 0) {
        e.preventDefault();
    } 
    
    cardNumberInput.textContent = cardNumber.value;
    cardHolderInput.textContent = cardHolder.value.toUpperCase();
    month.textContent = expmonth.value;
    year.textContent = expYear.value;
    cvc.textContent = expCvc.value;

    form.setAttribute('class', 'hide');
    completeState.removeAttribute('class');
})

continuebutton.addEventListener('click', () => {
    form.removeAttribute('class');
    completeState.setAttribute('class', 'hide');
})

