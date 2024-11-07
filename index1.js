function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    let isValid = true;

    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    if (name.value.trim() === '') {
        nameError.textContent = 'Поле "Имя" не может быть пустым.';
        name.classList.add('error');
        isValid = false;
    } else {
        name.classList.remove('error');
    }
    if (!email.value.includes('@') || !email.value.includes('.')) {
        emailError.textContent = 'Поле "Email" должно содержать "@" и ".".';
        email.classList.add('error');
        isValid = false;
    } else {
        email.classList.remove('error');
    }

    if (password.value.length < 8) {
        passwordError.textContent = 'Поле "Пароль" должно содержать минимум 8 символов.';
        password.classList.add('error');
        isValid = false;
    } else {
        password.classList.remove('error');
    }
    if (isValid) {
        alert("Форма успешно отправлена!");
        document.getElementById('registrationForm').reset(); // Сброс формы
    }
}