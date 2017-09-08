import React from 'react';

export default (link, metaData, mediaType) => {
  if (link) {
    if (mediaType === 'image') {
      return (
        <div>
          <h1>{metaData['XMP:Title']}</h1>
          <img src={link.href} alt="" />
          <p>Created at: {metaData['XMP:DateCreated']}</p>
          <p>Credit: {metaData['XMP:Credit']}</p>
          <p>Description: {metaData['XMP:Description']}</p>
        </div>
      );
    }
    return (
      <div>
        <h1>{metaData['AVAIL:Title']}</h1>
        <audio src={link.href} controls />
        <p>Created at: {metaData['AVAIL:DateCreated']}</p>
        <p>Location: {metaData['AVAIL:Location']}</p>
        <p>Description: {metaData['AVAIL:Description']}</p>
      </div>
    );
  }
  return undefined;
};
