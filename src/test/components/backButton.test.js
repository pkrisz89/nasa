import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import BackButton from './../../components/backButton';

describe('Back button', () => {
  it('The href should point to the root', () => {
    const wrapper = render(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>
    );
    const link = wrapper.find('a');
    expect(link.prop('href')).toBe('/');
  });
  it('The button text should say Back', () => {
    const wrapper = shallow(<BackButton />);
    expect(wrapper.prop('children')).toBe('Back');
  });
});
