document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;

    if (password !== repeatPassword) {
        document.getElementById('result').textContent = 'Паролі не співпадають!';
        document.getElementById('result').style.color = 'red';
    } else {
        document.getElementById('result').textContent = `На ${email} надіслано лист із підтвердженням.`;
        document.getElementById('result').style.color = 'green';
    }
});
