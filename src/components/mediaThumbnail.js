import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const ImageWrapper = styled.div`
  margin: 10px;
  height: 180px;
  width: 320px;
`;

const Image = styled.img`
  height: 180px;
  width: 320px;
`;

export default (item, url) => (
  <ImageWrapper key={item.data[0].nasa_id}>
    <a href={`/${item.data[0].media_type}/${item.data[0].nasa_id}`}>
      <LazyLoad once>
        <Image src={url} alt="" />
      </LazyLoad>
      {item.data[0].title}
    </a>
  </ImageWrapper>
);
