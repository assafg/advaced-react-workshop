import React from 'react';
import { shallow, mount } from 'enzyme';
import TilesRow from './TilesRow';

const items = [1,2,3,4,5,6].map((a, i) => ({
  id: `${i}`,
  img: `img-url ${i}`,
  name: `test title ${i}`,
  desc: `tile test description ${i}`,
}));

describe('test tile row', () => {
  console.log(items);

  it('should shallow render a tile row', () => {
    const wrapper = shallow(<TilesRow
      items={items}
      onTileSelect={() => {}}
    />);
    expect(wrapper.find('.tile-row').length).toBe(1);
    // The tile itself is not rendered
    expect(wrapper.find('.title').length).toBe(0);
  });

  it('should deep render a tile row', () => {
    const wrapper = mount(<TilesRow
      items={items}
      onTileSelect={() => {}}
    />);

    expect(wrapper.find('.tile-row').length).toBe(1);
    // The tile itself is not rendered
    expect(wrapper.find('.title').length).toBe(6);
  });
});
