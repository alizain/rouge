import { generateId } from './utils';

export function create() {
  return [];
}

export function createFrame(funcDescriptor, value) {
  return Object.freeze({
    id: generateId(),
    funcDescriptor,
    value
  });
}

export function commitFrame(stack, frame) {
  return [frame, ...stack];
}

export function commitFuncDescriptor(stk, funcDescriptor) {
  return commitFrame(
    stk,
    createFrame(funcDescriptor, funcDescriptor.func(stk))
  );
}

export function commitValue(stk, value) {
  return commitFrame(stk, createFrame(null, value));
}

export function getPreviousNFrames(stk, num) {
  return stk.slice(0, num);
}

export function getPreviousNValues(stk, num) {
  return getPreviousNFrames(stk, num).map(frame => frame.value);
}
