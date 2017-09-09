import { findPaginationUrl } from './../../utils/paginationHelper';

it('it returns the url for pagination', () => {
  const urls = [
    { rel: 'next', href: 'next item' },
    { rel: 'prev', href: 'previous item' }
  ];
  expect(findPaginationUrl(urls, 'next')).toEqual({
    rel: 'next',
    href: 'next item'
  });
});
