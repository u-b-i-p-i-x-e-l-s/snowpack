import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expect } from 'chai';
import App from './App';

describe('<App>', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(document.body.contains(linkElement));
  });

  //  Test #1 - Validate import map for current package imports
  it('can update foo value', () => {
    const { getByText, } = render(<App />);
    fireEvent(
      getByText(/Update Foo/),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    // See foobar.mock.js
    expect(document.body.contains(getByText(/Teeeeest/)));
  })

  //  Test #2 - Validate import map for dependency imports
  it('can update foo value', () => {
    const { getByText, } = render(<App />);
    // See mathjs.mock.js
    expect(document.body.contains(getByText(/Test derivative!/)));
  })
});
