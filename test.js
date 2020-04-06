import { TicTacToe } from './index.js';
const props = {
  containerId: 'test_container',
  containerTicTacToeClassName: 'TicTacToelContainer',
  positionsPropsClassName: 'positions',
  backgroundColor: 'black',
  borderColor: 'red',
  iconColor: 'blue',
  funkEveryClick: () => { console.log('1') },
  gameOverFunk: () => { console.log('2') },
}
const instance = new TicTacToe(props);
