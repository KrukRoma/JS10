document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const birthday = document.getElementById('birthday').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;

    const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked'))
        .map(skill => skill.value)
        .join(', ');

    const resultTable = document.getElementById('resultTable');
    resultTable.innerHTML = `
        <tr><th>Firstname</th><td>${firstname}</td></tr>
        <tr><th>Lastname</th><td>${lastname}</td></tr>
        <tr><th>Birthday</th><td>${birthday}</td></tr>
        <tr><th>Gender</th><td>${gender}</td></tr>
        <tr><th>Country</th><td>${country}</td></tr>
        <tr><th>City</th><td>${city}</td></tr>
        <tr><th>Skills</th><td>${skills}</td></tr>
    `;
});
