// import necessary react testing library helpers here
import {cleanup, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import the Counter component here
import Counter from "../components/Counter"

let increment, decrement, counter;
beforeEach(() => {
  // Render the Counter component here
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Counter />);
  counter = screen.getByTestId('count');
  increment = screen.getByRole('button', { name: '+' });
  decrement = screen.getByRole('button', { name : '-' });
});

afterEach(() => {
  cleanup();
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(counter).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  expect(counter).toHaveTextContent(0);
  userEvent.click(increment);
  expect(counter).toHaveTextContent(1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  expect(counter).toHaveTextContent(0);
  userEvent.click(decrement);
  expect(counter).toHaveTextContent(-1);
});
