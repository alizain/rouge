import React, { Component } from 'react';
import Stack from './Stack';
import NumberInputForm from './NumberInputForm';

import * as stackOps from '../stack';
import { activeFuncs } from '../stack/funcs';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      stack: stackOps.create()
    };

    this.clearStack = this.clearStack.bind(this);
    this.commitValueToStack = this.commitValueToStack.bind(this);
    this.commitFuncDescriptorToStack = this.commitFuncDescriptorToStack.bind(
      this
    );
  }

  clearStack() {
    this.setState({
      stack: stackOps.create()
    });
  }

  commitValueToStack(value) {
    this.setState(state => ({
      stack: stackOps.commitValue(state.stack, value)
    }));
  }

  commitFuncDescriptorToStack(funcDescriptor) {
    this.setState(state => ({
      stack: stackOps.commitFuncDescriptor(state.stack, funcDescriptor)
    }));
  }

  render() {
    const { stack } = this.state;
    return (
      <div>
        <Stack stack={stack.slice()} />
        <NumberInputForm onSubmit={this.commitValueToStack} />
        <div>
          <button type="button" onClick={this.clearStack}>
            Clear stack
          </button>
        </div>
        {activeFuncs.map(funcDescriptor => (
          <div key={funcDescriptor.id}>
            <button
              type="button"
              onClick={() => this.commitFuncDescriptorToStack(funcDescriptor)}
            >
              {funcDescriptor.humanTitle}
            </button>
          </div>
        ))}
      </div>
    );
  }
}
