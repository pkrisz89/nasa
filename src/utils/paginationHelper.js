export const findPaginationUrl = (urls, direction) => {
    if (urls) {
      return urls.find(url => url.rel === direction)
    }
    return undefined
  }