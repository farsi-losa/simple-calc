import React from 'react';
import App from './App';

import Enzyme from 'enzyme';
import {render, fireEvent, cleanup} from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

test('renders Hasil', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hasil/i);
  expect(linkElement).toBeInTheDocument();
});

const setup = () => {
  const utils = render(<App />)
  const input1 = utils.getByLabelText('input1')
  const input2 = utils.getByLabelText('input2')
  const input3 = utils.getByLabelText('input3')
  const check1 = utils.getByLabelText('check1')
  const check2 = utils.getByLabelText('check2')
  const check3 = utils.getByLabelText('check3')
  const button_addition = utils.getByLabelText('addition')
  // const print_result = utils.getByLabelText('result')
  return {
    input1,
    input2,
    input3,
    check1,
    check2,
    check3,
    button_addition,
    // print_result,
    ...utils,
  }
}

test('Input value 1 onChange', () => {
  const { input1 } = setup()
  fireEvent.change(input1, { target: { value: '23' } })
  expect(input1.value).toBe('23')
})

test('Input value 2 onChange', () => {
  const { input2 } = setup()
  fireEvent.change(input2, { target: { value: '23' } })
  expect(input2.value).toBe('23')
})

test('Input value 3 onChange', () => {
  const { input3 } = setup()
  fireEvent.change(input3, { target: { value: '23' } })
  expect(input3.value).toBe('23')
})

test('Input value 1 onChange', () => {
  const { check1 } = setup()
  fireEvent.change(check1, { target: { checked: true } })
  expect(check1.checked).toBe(true)
})

test('Checkbox 1 onChange', () => {
  const { check2 } = setup()
  fireEvent.change(check2, { target: { checked: true } })
  expect(check2.checked).toBe(true)
})

test('Checkbox 2 onChange', () => {
  const { check3 } = setup()
  fireEvent.change(check3, { target: { checked: true } })
  expect(check3.checked).toBe(true)
})

test('Checkbox 3 onChange', () => {
  const { check3 } = setup()
  fireEvent.change(check3, { target: { checked: true } })
  expect(check3.checked).toBe(true)
})

test('Checkbox 3 onChange', () => {
  const { check3 } = setup()
  fireEvent.change(check3, { target: { checked: true } })
  expect(check3.checked).toBe(true)
})