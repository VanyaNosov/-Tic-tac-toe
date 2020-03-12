import {TicTacToe} from './index.js';
const testContainer = document.getElementById('test_container');
const instance = new TicTacToe(testContainer,'blue');


// new TicTacToe('Tic_tac_toe_container');
// const instance2 = new TicTacToe('block2');



// const f = (name, index = 0) => {

//   if (index !== 5) {
//     return f(`${name}_${name}`, index + 1);
//   }
// }

// f('Ivan');