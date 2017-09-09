import React from 'react';
import { mount, shallow, render } from 'enzyme';
import error from './../../components/error';

describe('Error', () => {
  it('should display the error message when the bool is true', () => {
    const wrapper = shallow(error(true));
    expect(wrapper.prop('children')).toBe(
      'An error has occured. Please try again.'
    );
  });

  xit('should not display the error message when the bool is false', () => {
    const wrapper = shallow(error(false));
    expect(wrapper).toBeUndefined();
  });
});
