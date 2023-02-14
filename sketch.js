const body = document.body;
const container = document.createElement('div');

container.className = 'container';

body.append(container);

container.style.backgroundColor = "white";
container.style.border = "thick solid fuchsia";
container.style.width = "384px";
container.style.height = "384px";

body.style.backgroundColor = "aquamarine";
body.style.minHeight = "100vh";

    for (let i = 1; i <= 16 * 16; i++) {
    const gridBox = document.createElement('div');
    gridBox.addEventListener('mouseover', () => {
        gridBox.style.backgroundColor = 'black';
    });
    gridBox.style.border = "1px solid darkgrey";
    container.appendChild(gridBox);
}
