const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

function error(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    console.log(inputControl);
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

function success(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (emailValue === '') {
        error(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        error(email, 'Provide a valid email address');
    } else {
        success(email);
    }

    if (passwordValue === '') {
        error(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        error(password, 'Password must be at least 8 character.')
    } else {
        success(password);
    }

    if (password2Value === '') {
        error(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        error(password2, "Passwords doesn't match");
    } else {
        success(password2);
    }
if (form.email.value == "esraa@yahoo.com" && form.password.value == "12345678") {
    window.location.href = "./quizquiz.html"

}
}


