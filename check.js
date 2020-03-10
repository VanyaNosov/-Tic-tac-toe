// import TicTacToe from './index';
// // const TicTacToe = require('./index');

// const instance = new TicTacToe('Tic_tac_toe_container');
// const instance2 = new TicTacToe('block2');

// console.log(instance);


const f = (name, index = 0) => {

  if (index !== 5) {
    return f(`${name}_${name}`, index + 1);
  }
}

f('Ivan');