import { render, screen } from '@testing-library/react';
import App from './App';

// Add your tests here
describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
  });
});
