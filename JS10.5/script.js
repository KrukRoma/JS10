document.getElementById('questionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const question = document.getElementById('question').value;
    const correctAnswer = document.getElementById('correctAnswer').value;
    const wrongAnswer = document.getElementById('wrongAnswer').value;

    const questionsList = document.getElementById('questionsList');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <strong>${question}</strong><br>
        <em>Correct answer:</em> ${correctAnswer}<br>
        <em>Wrong answer:</em> ${wrongAnswer}
    `;

    questionsList.appendChild(listItem);

    document.getElementById('questionForm').reset();
});
