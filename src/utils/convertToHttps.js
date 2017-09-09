export default function(url) {
  if (url.includes('https')) {
    return url;
  }
  return url.slice(0, 4) + 's' + url.slice(4);
}
