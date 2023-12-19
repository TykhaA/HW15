const input = document.querySelector('#validation-input');

input.addEventListener('blur', handlerCheckLength);
function handlerCheckLength(event) {
    if (event.currentTarget.value.length == input.dataset.length) {
        input.classList.remove('invalid');
        input.classList.add('valid');

    } else {
        input.classList.add('invalid');
    }
}