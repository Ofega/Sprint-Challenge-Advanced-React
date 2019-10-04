import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import App from './App';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<App />);
});


describe('App Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('contains the phrase `worldwide`', () => {
        const phrase = tools.queryByText(/worldwide/i);
        expect(phrase).toBeInTheDocument();
    });
})