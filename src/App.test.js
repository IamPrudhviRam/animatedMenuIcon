import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

test('Sample test case: adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
          expect(a + b).not.toBe(0);
      }
    }
  });
  
test('App test case: renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});