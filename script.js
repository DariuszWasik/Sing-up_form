
const firstNameInput = document.querySelector('#first_name');
const alertFirstName = document.querySelector('.alert_first_name');

function first () {
    if (firstNameInput.validity.valid) {
        alertFirstName.textContent = '';
        alertFirstName.style.color = 'green';
        alertFirstName.innerHTML = '&#10004;';
        alertFirstName.style.alignSelf = "end";     
    }
    else {
    alertFirstName.style.color = 'red';
    alertFirstName.style.alignSelf = 'center';
    alertFirstName.innerHTML = 'Enter your first name correctly';
    }
}    

const lastNameInput = document.querySelector('#last_name');
const alertLastName = document.querySelector('.alert_last_name');

function last () {
    if (lastNameInput.validity.valid) {
        alertLastName.textContent = '';
        alertLastName.style.color = 'green';
        alertLastName.innerHTML = '&#10004;';
        alertLastName.style.alignSelf = 'end';     
    }
    else {
    alertLastName.style.color = 'red';
    alertLastName.style.alignSelf = 'center';
    alertLastName.innerHTML = 'Enter your last name correctly';
    }
}    

const emailInput = document.querySelector('#email');
const alertEmail = document.querySelector('.alert_email');

function email () {
    if (emailInput.validity.valid) {
        alertEmail.textContent = '';
        alertEmail.style.color = 'green';
        alertEmail.innerHTML = '&#10004;';
        alertEmail.style.alignSelf = 'end';     
    }
    else {
    alertEmail.style.color = 'red';
    alertEmail.style.alignSelf = 'center';
    alertEmail.innerHTML = 'Enter valid email';
    }
}    

const phoneNumberInput = document.querySelector('#phone_number');
const alertPhoneNumber = document.querySelector('.alert_phone_number');

function phone () {
    if (phoneNumberInput.validity.valid) {
        alertPhoneNumber.textContent = '';
        alertPhoneNumber.style.color = 'green';
        alertPhoneNumber.innerHTML = '&#10004;';
        alertPhoneNumber.style.alignSelf = 'end';     
    }
    else {
    alertPhoneNumber.style.color = 'red';
    alertPhoneNumber.style.alignSelf = 'center';
    alertPhoneNumber.innerHTML = 'Enter valid phone number (12digit)';
    }
}    




firstNameInput.addEventListener('change', first);
lastNameInput.addEventListener('change', last);
emailInput.addEventListener('change', email);
phoneNumberInput.addEventListener('change', phone)
