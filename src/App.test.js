import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('initializes the state with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([]);
})

it('adds a new gift to state upon clicking the add gift button', () => {
  app.find('.btn-add').simulate('click');
  expect(app.state().gifts).toEqual([{ id: 1 }]);
})