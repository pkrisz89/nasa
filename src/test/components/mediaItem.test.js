import React from 'react';
import { mount, shallow, render } from 'enzyme';
import mediaItem from './../../components/mediaItem';

xdescribe('mediaItem', () => {
  describe('image type', () => {
    const link = { href: 'img link' };
    const metaData = {
      'XMP:Title': 'Test title',
      'XMP:Description': 'Test Description',
      'XMP:Credit': 'Test Credit',
      'XMP:DateCreated': '2012-01-01'
    };
    const mediaType = 'image';
    const wrapper = render(mediaItem(link, metaData, mediaType));

    it('should render the correct title', function() {
      const h1 = wrapper.find('h1');
      expect(h1.text()).toBe('Test title');
    });

    it('should render the correct image', function() {
      const img = wrapper.find('img');
      expect(img.prop('src')).toBe('img link');
    });

    it('should render the correct description', function() {
      const desc = wrapper.find('p').get(0);
      expect(desc.children[0].data).toBe('Description: Test Description');
    });

    it('should render the correct credit and date', function() {
      const credit = wrapper.find('p i').get(0).children[0].data;
      expect(credit).toBe('Credit: Test Credit / Created at: 2012-01-01');
    });
  });
  describe('audio type', () => {
    const link = { href: 'img link' };
    const metaData = {
      'AVAIL:Title': 'Audio title',
      'AVAIL:Description': 'Test Description',
      'AVAIL:Location': 'Moon',
      'AVAIL:DateCreated': '2012-01-01'
    };
    const mediaType = 'audio';
    const wrapper = render(mediaItem(link, metaData, mediaType));

    it('should render the correct title', () => {
      const h1 = wrapper.find('h1');
      expect(h1.text()).toBe('Audio title');
    });

    it('should render the correct description', () => {
      const desc = wrapper.find('p').get(2).children[0].data;
      expect(desc).toBe('Description: Test Description');
    });

    it('should render the correct location', () => {
      const location = wrapper.find('p').get(1).children[0].data;
      expect(location).toBe('Location: Moon');
    });

    it('should render the correct date', () => {
      const date = wrapper.find('p').get(0).children[0].data;
      expect(date).toBe('Created at: 2012-01-01');
    });
  });
});
