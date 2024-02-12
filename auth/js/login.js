let user = {
    email: 'user@mail.ru',
    pass: '123'
}
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
        let form = document.forms.login,
            email = form.elements[0].value,
            pass = form.elements[1].value;
        event.preventDefault();
        if (email === user.email && pass !== user.pass) {
            isAuth = true;
        } else {
            isAuth = false
        }
    }
})