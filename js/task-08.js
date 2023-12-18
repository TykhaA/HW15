const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    
    const data = {
        userEmail: email.value,
        userPassword: password.value,
    };
    for (let element in data) {
        if (data[element]=== '') {
            alert('all fields must be filled');
            return
        }
    }
    console.log(data)
    form.reset()
}
