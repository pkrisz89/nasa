import React from 'react';
import mediaThumbnail from './../components/mediaThumbnail';

const audioFile = '/img/audio.png';

const notFound = mediatype => <h1>No {mediatype} found.</h1>;

export default function(items, mediatype, searchedBefore) {
  if (!items.length && searchedBefore) {
    return notFound(mediatype);
  }
  return items.map(item => {
    if (item.data[0].media_type === 'audio') {
      return mediaThumbnail(item, audioFile);
    }
    return mediaThumbnail(item, item.links[0].href);
  });
}
