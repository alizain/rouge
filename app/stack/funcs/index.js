import { getPreviousNValues } from '../index';

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

export const addPreviousTwoFrames = addPreviousNFrames(2);
export const subtractPreviousTwoFrames = subtractPreviousNFrames(2);

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
