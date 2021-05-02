import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Button } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<div>Hello</div>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
