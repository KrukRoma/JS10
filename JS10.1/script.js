document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const login = document.getElementById('login').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    const message = `Привіт, ${login}! Я тебе ${rememberMe ? 'запам’ятав' : 'не запам’ятав'}.`;
    document.getElementById('result').textContent = message;
});
