import style from './style';
export class TicTacToe {
  constructor(props) {
    this.mainUnit = props.containerTicTacToeClassName;
    this.positionsProps = props.positionsPropsClassName;
    this.dischargeCreate;
    this.container = props.containerId;
    this.backgroundColor = props.backgroundColor;
    this.borderColor = props.borderColor;
    this.iconColor = props.iconColor;
    this.color = '';
    this.current = 'X';
    this.x = 'X';
    this.o = 'O';
    this.positionsArray = [];
    this.styleArrayPositions;
    console.log(this.positionsArray)
    this.mainBlock;
    this.positionsCreate;
    this.container = document.getElementById('test_container');
    this.createBlock(this.container, this.mainUnit, this.positionsProps);
    this.clickMainBlock();
    this.clickDischargeCreate();
  }

  clickDischargeCreate() {
    this.dischargeCreate.addEventListener('click', () => {
      this.dischargeMethod()
    })
  }

  clickMainBlock() {
    this.mainBlock.addEventListener('click', (e) => {
      this.click(e);
      if (this.gameOver() === 'game over') {
        this.deactivatingPositions()
      }
      this.gameOver()
    })
  }

  deactivatingPositions() {
    this.dischargeCreate.addEventListener('click', () => {
      for (let i = 0; i < this.positionsArray.length; i++) {
        this.positionsArray[i].className = 'positions';
      }
    })
  }

  dischargeMethod() {
    for (let i = 0; i < this.positionsArray.length; i++) {
      this.positionsArray[i].innerHTML = '';
      this.positionsArray[i].className = this.positionsProps;
    }
  }

  createBlock(a, classNameMainUnit, className) {
    this.mainBlock = document.createElement('div');
    this.dischargeCreate = document.createElement('button');
    this.dischargeCreate.style.backgroundColor = this.iconColor;
    this.mainBlock.style.backgroundColor = this.backgroundColor;
    this.mainBlock.className = classNameMainUnit;
    let array = [];
    for (let i = 0; i < 9; i++) {
      this.positionsCreate = document.createElement('div');
      this.positionsCreate.className = className;
      this.positionsCreate.style.background = this.iconColor;
      this.positionsArray.push(this.positionsCreate);
      array.push(this.positionsCreate);
      this.mainBlock.appendChild(this.positionsCreate);
    }
    Object.keys(style).forEach((block) => {
      Object.keys(style[block]).forEach((key) => {
        let value = style[block][key];
        if (block === 'mainBlock') {
          this[block].style[key] = value;
        }
        if (block === 'dischargeCreate') {
          this[block].style[key] = value;
        }
        if (block === 'positionsArray') {
          for (let i = 0; i < array.length; i++) {
            console.log(style[key] = value)
            array[i].style[key] = value;
          }
        }
      })
    })
    a.appendChild(this.mainBlock);
    a.appendChild(this.dischargeCreate);
    return this.mainBlock;
  }

  click(e) {
    if (e.target.className === this.positionsProps) {
      e.target.innerHTML = this.current;
      this.current = this.current === 'X' ? 'O' : this.current === 'O' ? 'X' : 'O';
    }
    e.target.className = 'no_active';
  }

  setColor(backgroundColor) {
    this.background = backgroundColor;
    this.TicTacToeContainerHtml.style.background = this.background;
  }

  gameOver() {
    //Крестик
    if (this.positionsArray[0].textContent === this.x && this.positionsArray[1].textContent === this.x && this.positionsArray[2].textContent === this.x) return 'game over';
    if (this.positionsArray[3].textContent === this.x && this.positionsArray[4].textContent === this.x && this.positionsArray[5].textContent === this.x) return 'game over';
    if (this.positionsArray[6].textContent === this.x && this.positionsArray[7].textContent === this.x && this.positionsArray[8].textContent === this.x) return 'game over';
    if (this.positionsArray[0].textContent === this.x && this.positionsArray[3].textContent === this.x && this.positionsArray[6].textContent === this.x) return 'game over';
    if (this.positionsArray[1].textContent === this.x && this.positionsArray[4].textContent === this.x && this.positionsArray[7].textContent === this.x) return 'game over';
    if (this.positionsArray[2].textContent === this.x && this.positionsArray[5].textContent === this.x && this.positionsArray[8].textContent === this.x) return 'game over';
    if (this.positionsArray[0].textContent === this.x && this.positionsArray[4].textContent === this.x && this.positionsArray[8].textContent === this.x) return 'game over';
    if (this.positionsArray[2].textContent === this.x && this.positionsArray[4].textContent === this.x && this.positionsArray[6].textContent === this.x) return 'game over';
    //Нолики
    if (this.positionsArray[0].textContent === this.o && this.positionsArray[1].textContent === this.o && this.positionsArray[2].textContent === this.o) return 'game over';
    if (this.positionsArray[3].textContent === this.o && this.positionsArray[4].textContent === this.o && this.positionsArray[5].textContent === this.o) return 'game over';
    if (this.positionsArray[6].textContent === this.o && this.positionsArray[7].textContent === this.o && this.positionsArray[8].textContent === this.o) return 'game over';
    if (this.positionsArray[0].textContent === this.o && this.positionsArray[3].textContent === this.o && this.positionsArray[6].textContent === this.o) return 'game over';
    if (this.positionsArray[1].textContent === this.o && this.positionsArray[4].textContent === this.o && this.positionsArray[7].textContent === this.o) return 'game over';
    if (this.positionsArray[2].textContent === this.o && this.positionsArray[5].textContent === this.o && this.positionsArray[8].textContent === this.o) return 'game over';
    if (this.positionsArray[0].textContent === this.o && this.positionsArray[4].textContent === this.o && this.positionsArray[8].textContent === this.o) return 'game over';
    if (this.positionsArray[2].textContent === this.o && this.positionsArray[4].textContent === this.o && this.positionsArray[6].textContent === this.o) return 'game over';
  }
}

// import { obg } from './style.js';
// console.log(obg)