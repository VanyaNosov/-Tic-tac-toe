class TicTacToe {
  constructor () {
    this.TicTacToeContainerHtml = document.getElementById('Tic_tac_toe_container');
    this.positions = document.getElementsByClassName('position');
    this.colorPositionbutton = document.getElementsByClassName('color_position');
    this.color = '';
    this.current = 'X';
  }

  click(e) {
    if(e.target.className === 'position no_active_position' || 'position active_position') {
      e.target.innerHTML = this.current;
      this.current = this.current === 'X' ? 'O' : this.current === 'O' ? 'X' : 'O';
      e.target.className = 'position active_position';
      // let buleo = true;
      // if(buleo === true) {
      //   e.target.innerHTML = 'X';
      //   buleo === false;
      //   return buleo;
      // }else {
      //   e.target.innerHTML = 'O';
      //   buleo === true;
      //   return buleo;
      // }
    }
  }
  setColor(value) {
    this.color = value;
    this.TicTacToeContainerHtml.style.background = this.color;
    console.log(this.color)
  }
  gameOver() {
    //Крестики
    if(this.positions[0].innerHTML === 'X' && this.positions[1].innerHTML === 'X' && this.positions[2].innerHTML === 'X') alert('Победа крестико');
    if(this.positions[3].innerHTML === 'X' && this.positions[4].innerHTML === 'X' && this.positions[5].innerHTML === 'X') alert('Победа крестико');
    if(this.positions[6].innerHTML === 'X' && this.positions[7].innerHTML === 'X' && this.positions[8].innerHTML === 'X') alert('Победа крестико');
    if(this.positions[0].innerHTML === 'X' && this.positions[3].innerHTML === 'X' && this.positions[6].innerHTML === 'X') alert('Победа крестико');
    if(this.positions[1].innerHTML === 'X' && this.positions[4].innerHTML === 'X' && this.positions[7].innerHTML === 'X') alert('Победа крестико');
    if(this.positions[2].innerHTML === 'X' && this.positions[5].innerHTML === 'X' && this.positions[8].innerHTML === 'X') alert('Победа крестико');
    if(this.positions[0].innerHTML === 'X' && this.positions[4].innerHTML === 'X' && this.positions[8].innerHTML === 'X') alert('Победа крестико');
    if(this.positions[2].innerHTML === 'X' && this.positions[4].innerHTML === 'X' && this.positions[6].innerHTML === 'X') alert('Победа крестико');
    //Нолики
    if(this.positions[0].innerHTML === 'O' && this.positions[1].innerHTML === 'O' && this.positions[2].innerHTML === 'O') alert('Победа ноликов');
    if(this.positions[3].innerHTML === 'O' && this.positions[4].innerHTML === 'O' && this.positions[5].innerHTML === 'O') alert('Победа ноликов');
    if(this.positions[6].innerHTML === 'O' && this.positions[7].innerHTML === 'O' && this.positions[8].innerHTML === 'O') alert('Победа ноликов');
    if(this.positions[0].innerHTML === 'O' && this.positions[3].innerHTML === 'O' && this.positions[6].innerHTML === 'O') alert('Победа ноликов');
    if(this.positions[1].innerHTML === 'O' && this.positions[4].innerHTML === 'O' && this.positions[7].innerHTML === 'O') alert('Победа ноликов');
    if(this.positions[2].innerHTML === 'O' && this.positions[5].innerHTML === 'O' && this.positions[8].innerHTML === 'O') alert('Победа ноликов');
    if(this.positions[0].innerHTML === 'O' && this.positions[4].innerHTML === 'O' && this.positions[8].innerHTML === 'O') alert('Победа ноликов');
    if(this.positions[2].innerHTML === 'O' && this.positions[4].innerHTML === 'O' && this.positions[6].innerHTML === 'O') alert('Победа ноликов');
  }
}

const TicTacToeContainerHtml = document.getElementById('Tic_tac_toe_container');
const instance = new TicTacToe();
TicTacToeContainerHtml.addEventListener('click', (e) => {
  instance.click(e);
  instance.gameOver()
})
const colorPositionbutton = document.getElementsByClassName('color_position');
for(let i = 0; i < colorPositionbutton.length; i++) {
  colorPositionbutton[i].addEventListener('click', (event) => {
    instance.setColor(event.target.innerHTML)
  })
}


