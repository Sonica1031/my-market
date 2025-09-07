import { render } from '@testing-library/react';
import App from './App'


test('renders App without crashing', () => {
  render(<App />);
})

test('renders all nav bars', () => {
  const { getByText } = render(<App />);
  const home = getByText(/home/i)
  const edibles = getByText(/edibles/i);
  const leaves = getByText(/leaves/i);
  const accessories = getByText(/accessories/i);
  expect(home).toBeInTheDocument();
  expect(edibles).toBeInTheDocument();
  expect(leaves).toBeInTheDocument();
  expect(accessories).toBeInTheDocument();
});

test('it renders without crashing', () =>{
  render(
    <ediles />
  )
})

