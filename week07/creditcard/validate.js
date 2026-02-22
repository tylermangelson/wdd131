const form = document.querySelector('form');
const cardInput = document.querySelector('#creditCardNumber');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const successMessage = document.querySelector('#successMessage');

function isCardNumberValid(number) {
    return number === '1234123412341234';
}

function displayError(msg) {
    document.querySelector('.errors').textContent = msg;
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';

    const cardNum = cardInput.value.trim();

    if (!/^\d{16}$/.test(cardNum)) {
        errorMsg += 'Card number must be 16 digits.\n';
    } else if (!isCardNumberValid(cardNum)) {
        errorMsg += 'Card number is not valid.\n';
    }

    const expMonth = Number(monthInput.value);
    const expYear = Number(yearInput.value);
    const currentDate = new Date();

    if (2000 + expYear < currentDate.getFullYear() ||
        (2000 + expYear === currentDate.getFullYear() && expMonth <= currentDate.getMonth())) {
        errorMsg += 'Card is expired.\n';
    }

    if (errorMsg !== '') {
        displayError(errorMsg);
        return;
    }

    displayError('');
    successMessage.hidden = false;
}

form.addEventListener('submit', submitHandler);