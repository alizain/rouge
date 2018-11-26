import { getPreviousNValues, getLastValue } from '../index';

function createStackFunc(func, humanTitle) {
  return Object.freeze({ func, humanTitle });
}

function addPreviousNFrames(num) {
  return createStackFunc(
    stk =>
      getPreviousNValues(stk, num)
        .reverse()
        .reduce((a, b) => a + b),
    `add previous ${num} frames`
  );
}

function subtractPreviousNFrames(num) {
  return createStackFunc(
    stk =>
      getPreviousNValues(stk, num)
        .reverse()
        .reduce((a, b) => a - b),
    `subtract previous ${num} frames`
  );
}

function multiplyPreviousNFrames(num) {
  return createStackFunc(
    stk =>
      getPreviousNValues(stk, num)
        .reverse()
        .reduce((a, b) => a * b),
    `multiply previous ${num} frames`
  );
}

const addPreviousTwoFrames = addPreviousNFrames(2);
const subtractPreviousTwoFrames = subtractPreviousNFrames(2);
const multiplyPreviousTwoFrames = multiplyPreviousNFrames(2);

const fromCharCode = createStackFunc(
  stk => String.fromCharCode(getLastValue(stk)),
  `last value to character`
);

// function createStackFuncGenerator(func, humanTitle, args) {
//   return Object.freeze({func, humanTitle, args})
// }
//
// function createArg(type, humanTitle) {
//   Object.freeze({type, humanTitle})
// }
//
// export function numberArg(humanTitle) {
//   return createArg('number', humanTitle)
// }
//

export const activeFuncs = [
  addPreviousTwoFrames,
  subtractPreviousTwoFrames,
  multiplyPreviousTwoFrames,
  fromCharCode
];
