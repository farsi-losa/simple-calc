import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// test("should display input form, with all checklist is unchecked", async () => {
//   const { findByTestId } = renderLoginForm();

//   const loginForm = await findByTestId("login-form");

//   expect(loginForm).toHaveFormValues({
//     username: "",
//     password: "",
//     remember: true
//   });
// });