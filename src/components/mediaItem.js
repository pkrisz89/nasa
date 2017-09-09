import React from 'react';
import styled from 'styled-components';

const MediaContainer = styled.div`
  margin: 0 auto;
  max-width: 1080px;
`;

const Image = styled.img`
  width: 100%;
  height: auto:
  max-width: 1080px;
`;

const Title = styled.h1`
  display: inline-block;
  padding: 5px 10px;
  margin-bottom: 0;
  color: #efefef;
  background: #553982;
`;

export default (link, metaData, mediaType) => {
  if (link) {
    if (mediaType === 'image') {
      return (
        <MediaContainer>
          <Title>{metaData['XMP:Title']}</Title>
          <p>Description: {metaData['XMP:Description']}</p>
          <Image src={link.href} alt={metaData['XMP:Description']} />
          <p>
            <i>
              Credit: {metaData['XMP:Credit']} / Created at:{' '}
              {metaData['XMP:DateCreated']}
            </i>
          </p>
        </MediaContainer>
      );
    }
    return (
      <MediaContainer>
        <h1>{metaData['AVAIL:Title']}</h1>
        <audio src={link.href} controls />
        <p>Created at: {metaData['AVAIL:DateCreated']}</p>
        <p>Location: {metaData['AVAIL:Location']}</p>
        <p>Description: {metaData['AVAIL:Description']}</p>
      </MediaContainer>
    );
  }
  return undefined;
};
