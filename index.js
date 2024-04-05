console.log('funguju');


const changeColor = (color) => {
  const svgElement = document.getElementById('product-image');
  svgElement.style.fill = color; 
};

document.querySelector('.white button').addEventListener('click', () => {
  changeColor("rgb(245, 236, 236)")
});

document.querySelector('.red button').addEventListener('click', () => {
  changeColor("rgb(188, 13, 13)")
});

document.querySelector('.blue button').addEventListener('click', () => {
  changeColor("rgb(41, 116, 227)")
});

document.querySelector('.pink button').addEventListener('click', () => {
  changeColor("rgb(250, 121, 212)")
});

