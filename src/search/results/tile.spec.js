import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Tile from './Tile';
import sinon from 'sinon';

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
    name: 'test title',
    desc: 'tile test description',
  };
  const onSelect = () => {};
  const wrapper = shallow(<Tile item={item} onSelect={onSelect} />);
  expect(wrapper.find('img').length).toBe(1);
  expect(wrapper.find('.title').length).toBe(1);
  expect(wrapper.find('.title').text()).toBe('test title');
  expect(wrapper.find('.subtitle').length).toBe(1);
  expect(wrapper.find('.subtitle').text()).toBe('tile test description');
});

it('should test the clicking', () => {
  const item = {
    id: '123',
    img: 'img-url',
    name: 'test title',
    desc: 'tile test description',
  };
  const onSelect = sinon.spy();
  const wrapper = shallow(<Tile item={item} onSelect={onSelect} />);
  const img = wrapper.find('img');
  expect(img.length).toBe(1);
  img.simulate('click');
  expect(onSelect.callCount).toBe(1);
  expect(onSelect.calledWithMatch(item.id)).toBe(true);
})
