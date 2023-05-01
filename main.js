let color = 'black';
let click = true;

function populateBoard(size) {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  squares.forEach((div)=>div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover',colorSquare);
    square.style.backgroundColor = 'div';
    square.setAttribute('style','border:1px solid black;');
    board.insertAdjacentElement("beforeend", square);
  }
}
populateBoard(16);
function changeSize(input){
  if(input>=2 && input<=100){
    populateBoard(input);
  }
  else{
    alert("Size should be between 2 and 100");
  }
}
function colorSquare(){
  if(click)
  {
  if(color === 'random'){
    this.style.backgroundColor = `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`;
  }
  else{
  this.style.backgroundColor = color;
  }
}
}
function changeColor(choice){
  color = choice;
}
function resetBoard(){
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  squares.forEach((div)=>div.style.backgroundColor = 'white');
}
document.querySelector('body').addEventListener('click',()=>{
  click = !click;
});