import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('Sidebar Component', () => {
  it('renders a sidebar', () => {
    const wrapper = shallow(
      <Sidebar>
        <a href="#">Test Snapshot</a>
      </Sidebar>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
