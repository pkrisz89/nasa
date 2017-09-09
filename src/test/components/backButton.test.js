import React from 'react';
import { mount, shallow } from 'enzyme';
import BackButton from './../../components/backButton';

describe('Back button', () => {
  it('The href should point to the root', () => {
    const wrapper = shallow(<BackButton />);
    expect(wrapper.prop('href')).toBe('/');
  });
  it('The button text should say Back', () => {
    const wrapper = shallow(<BackButton />);
    expect(wrapper.prop('children')).toBe('Back');
  });
});
