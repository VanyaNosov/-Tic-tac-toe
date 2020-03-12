export class TicTacToe {
  constructor (block,color) {
    this.TicTacToeGlobalContainer = document.getElementById('Tic_tac_toe_global_container'); 
    block.appendChild(this.TicTacToeGlobalContainer)
    this.TicTacToeContainerHtml = document.getElementById('Tic_tac_toe_container');  
    this.positions = document.getElementsByClassName('position');
    this.colorPositionbutton = document.getElementsByClassName('color_position');
    this.discharge = document.getElementById('discharge');  
    this.colorBlock = document.getElementById('color_block');  
    this.color = '';
    this.current = 'X';
    this.TicTacToeContainerHtml.addEventListener('click', (e) => {
      this.click(e);
      this.gameOver()
    })
    this.discharge.addEventListener('click', () => {
      for (let i = 0; i < this.positions.length; i++){
        this.positions[i].innerHTML = '';
        this.positions[i].className = 'position no_active_position';
      }
    })
    // for (let i = 0; i < this.colorPositionbutton.length; i++) {
    //   this.colorPositionbutton[i].addEventListener('click', (e) => {
    //     // instance.setColor(event.target.innerHTML)
    //     instance.setColor(color)
    //   })
    // }
    this.colorBlock.addEventListener('click', () =>  {
      this.setColor(color)
    })

    for (let i = 0; i < 9; i++) {
      const el = this.createBlock('position no_active_position');
      this.TicTacToeContainerHtml.appendChild(el);
    }
  }

  createBlock(className) {
    const el = document.createElement('div');
    el.className = className;
    return el;
  }

  click(e) {
    if(e.target.className === 'position no_active_position') {
      e.target.innerHTML = this.current;
      this.current = this.current === 'X' ? 'O' : this.current === 'O' ? 'X' : 'O';
    }
    e.target.className = 'position active_position';
  }

  setColor(color) {
    this.color = color;
    this.TicTacToeContainerHtml.style.background = this.color;
  }

  gameOver() {
    //Крестик
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


// module.export = TicTacToe;
