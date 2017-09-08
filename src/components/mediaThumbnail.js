import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const ImageWrapper = styled.div`
  position: relative;
  height: 180px;
  width: 320px;
  margin: 5px;
  background: #efefef;
`;

const Image = styled.img`
  height: 180px;
  width: 320px;
`;

const Title = styled.p`
  position: absolute;
  bottom: 0;
  text-align: center;
  color: #efefef;
  background: #553982;
  padding: 5px;
`;

export default (item, url) => (
  <ImageWrapper key={item.data[0].nasa_id}>
    <a href={`/${item.data[0].media_type}/${item.data[0].nasa_id}`}>
      <LazyLoad once>
        <Image src={url} alt="" />
      </LazyLoad>
      <Title>{item.data[0].title}</Title>
    </a>
  </ImageWrapper>
);
