const colorBtn = document.getElementById('colorBtn');
const container = document.querySelector('.container');

colorBtn.addEventListener('click', changeColor);


function changeColor() {
    const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff', '#99ffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    container.computedStyleMap.backgroundColor = randomColor;
}