import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Tile from './Tile';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const item = {
    id: '123',
    img: 'img-url',
    title: 'test title',
    desc: 'tile test description',
  };
  const onSelect = () => {};
  ReactDOM.render(<Tile item={item} onSelect={onSelect} />, div);
});


it('shallow renders without crashing', () => {
  const item = {
    id: '123',
    img: 'img-url',
    title: 'test title',
    desc: 'tile test description',
  };
  const onSelect = () => {};
  const wrapper = shallow(<Tile item={item} onSelect={onSelect} />);
});
