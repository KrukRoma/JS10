document.getElementById('colorForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const r = parseInt(document.getElementById('r').value);
    const g = parseInt(document.getElementById('g').value);
    const b = parseInt(document.getElementById('b').value);

    const color = `rgb(${r}, ${g}, ${b})`;

    const palette = document.getElementById('palette');
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = color;
    colorBox.textContent = `RGB(${r}, ${g}, ${b})`;

    palette.appendChild(colorBox);

    document.getElementById('colorForm').reset();
});
