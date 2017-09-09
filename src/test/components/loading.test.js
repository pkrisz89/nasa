import React from 'react';
import { mount, shallow, render } from 'enzyme';
import loading from './../../components/loading';

describe('Loading', () => {
  it('should render an img with the correct src attr', () => {
    const wrapper = shallow(loading());
    const img = wrapper.find('img');

    expect(img.prop('src')).toBe('/img/loading.gif');
  });
});
