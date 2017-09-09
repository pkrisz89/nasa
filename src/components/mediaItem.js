import React from 'react';
import styled from 'styled-components';

import BackButton from './backButton';

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

const MediaHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default (link, metaData, mediaType) => {
  if (link) {
    if (mediaType === 'image') {
      return (
        <MediaContainer>
          <MediaHeader>
            <Title>{metaData['XMP:Title']}</Title>
            <BackButton />
          </MediaHeader>
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
        <MediaHeader>
          <Title>{metaData['AVAIL:Title']}</Title>
          <BackButton />
        </MediaHeader>
        <audio src={link.href} controls />
        <p>Created at: {metaData['AVAIL:DateCreated']}</p>
        <p>Location: {metaData['AVAIL:Location']}</p>
        <p>Description: {metaData['AVAIL:Description']}</p>
      </MediaContainer>
    );
  }
  return undefined;
};
