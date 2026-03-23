import React from 'react';
import { render } from '@testing-library/react';
import Login from '../Login';
import { AuthProvider } from '../../context/AuthContext';


describe('Login Page', () => {
  test('renders without crashing', () => {
    render(<AuthProvider><Login /></AuthProvider>);
  });
});
