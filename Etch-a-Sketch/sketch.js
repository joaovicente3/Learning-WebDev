function createGrid(x) {
    const container = document.getElementById('grid-container');
    container.innerHTML = ''; // Clear current grid

    const gridSize = x * 20; 

    container.style.width = `${gridSize}px`;
    container.style.height = `${gridSize}px`;

    for (let i = 0; i < x * x; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);

        div.addEventListener('mouseenter', function() {
            div.style.backgroundColor = 'black';
            if (previousHoveredItem) {
                previousHoveredItem.style.backgroundColor = 'black';
            }
            previousHoveredItem = div;
        });
    }
}

function handleButtonClick() {
    let x = parseInt(prompt('Enter the number of squares per side (maximum 30):'));
    if (isNaN(x) || x < 1 || x > 45) {
        alert('Please enter a valid number between 1 and 45.');
        return;
    }
    createGrid(x); 
}


window.onload = function() {
    createGrid(40); 
    const button = document.getElementById('btn');
    button.addEventListener('click', handleButtonClick);
}
