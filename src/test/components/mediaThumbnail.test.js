import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mediaThumbnail from './../../components/mediaThumbnail';

describe('mediaThumbnail', () => {
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
  const wrapper = render(
    <MemoryRouter>{mediaThumbnail(item, url)}</MemoryRouter>
  );

  it('should return the correct href', () => {
    const link = wrapper.find('a');
    expect(link.prop('href')).toBe('/image/1123');
  });
});
