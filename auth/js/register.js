let users = [],
    isAuth = false;
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn_reg')) {
        let form = document.forms.registration,
            login = form.elements[0].value,
            email = form.elements[1].value,
            pass = form.elements[2].value,
            pass2 = form.elements[3].value;
        event.preventDefault();
        if (pass === pass2 && pass !== '') {
            users.push({login, email, pass})
            isAuth = true;
        } else {
            isAuth = false
        }
    }
})
