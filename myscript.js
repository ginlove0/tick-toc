var squares = document.querySelectorAll("td")
var restart = document.getElementById("restart")
console.log(restart);
console.log(squares);
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
  }

}

restart.addEventListener('click', clearBoard)

function markX() {
//this dùng khi trong constructor (hàm) có nhiều variable giống nhau
//Ví dụ trong trường hợp này, squares là gọi của nhiều td => nếu input squares
//ở trong constructor này thì sẽ không biết là ô nào. Vậy dung this nghĩa là
//tất cả các ô có khả năng. Nếu muốn gọi squares trong hàm này, thì square phải
//getElementbyID cụ thể.
  if(this.textContent === ''){
    this.textContent = 'X';
    console.log(this);
  }else if(this.textContent === 'X'){
    this.textContent = 'O';
  }else{
    this.textContent = '';
  }
};


for(var i = 0; i < squares.length; i++){
  squares[i].addEventListener('click', markX);

}
