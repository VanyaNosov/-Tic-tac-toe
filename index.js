class TicTacToe {
  constructor () {
    this.TicTacToeContainerHtml = document.getElementById('Tic_tac_toe_container');
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
    
  }
}

const TicTacToeContainerHtml = document.getElementById('Tic_tac_toe_container');
const instance = new TicTacToe();
TicTacToeContainerHtml.addEventListener('click', (e) => {
  instance.click(e);
})
const colorPositionbutton = document.getElementsByClassName('color_position');
for(let i = 0; i < colorPositionbutton.length; i++) {
  colorPositionbutton[i].addEventListener('click', (event) => {
    instance.setColor(event.target.innerHTML)
  })
}


