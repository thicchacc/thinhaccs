import React from 'react';
import ReactDOM from 'react-dom';
import MarkList from './MarkList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MarkList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
