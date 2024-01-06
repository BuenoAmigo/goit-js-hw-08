import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
const KEY_EMAIL = "feedback-form-state";
const localData = localStorage.getItem(KEY_EMAIL);



form.addEventListener("input", throttle(onInput, 500));
form.addEventListener("submit", onSubmit);

checkLocalData();

function checkLocalData() {
    if (localData) {
        email.value = JSON.parse(localData).email;
        message.value = JSON.parse(localData).message;
    }
    else {
        email.value = "";
        message.value = "";
    }
}

function onInput() {
    const formData = {
        email: email.value,
        message: message.value
    }
    localStorage.setItem(KEY_EMAIL, JSON.stringify(formData));

    console.log(localStorage.getItem(KEY_EMAIL));
};


function onSubmit(evt) {
    evt.preventDefault();
    console.log(localStorage.getItem(KEY_EMAIL));
    evt.target.reset();
    localStorage.removeItem(KEY_EMAIL);
};


