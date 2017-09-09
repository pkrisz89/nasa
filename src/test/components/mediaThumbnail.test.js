import React from 'react';
import { mount, shallow, render } from 'enzyme';
import mediaThumbnail from './../../components/mediaThumbnail';

xdescribe('mediaThumbnail', () => {
  const item = {
    data: [
      {
        nasa_id: 1123,
        media_type: 'image',
        title: 'big image'
      }
    ]
  };
  const url = 'krisdotcom';
  const wrapper = render(mediaThumbnail(item, url));

  it('should return the correct href', () => {
    const link = wrapper.find('Link');

    expect(link.prop('to')).toBe('/image/1123');
  });
});
