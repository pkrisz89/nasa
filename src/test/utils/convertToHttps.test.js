import convertToHttps from './../../utils/convertToHttps';

describe('convert to https when needed', () => {
  const urls = [
    { href: 'http://change.com' },
    { href: 'https://nochange.com' }
  ];
  it('it returns the url without changes', () => {
    expect(convertToHttps(urls[1].href)).toBe('https://nochange.com');
  });

  it('it returns the url with https', () => {
    expect(convertToHttps(urls[0].href)).toBe('https://change.com');
  });
});
