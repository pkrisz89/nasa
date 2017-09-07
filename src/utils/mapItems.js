import React from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

const ImageWrapper = styled.div`
    margin: 10px;
    height: 180px;
    width: 320px;
`;

const Image = styled.img`
    height: 180px;
    width: 320px;
`;

export default function(items) {
    if (items) {
      return items.map(item => {
        return (
            <ImageWrapper key={item.data[0].nasa_id}>
                <LazyLoad once>
                    <Image src={item.links[0].href} alt=""/>
                </LazyLoad>
                {item.data[0].title}
            </ImageWrapper>
            )
      })
    }
  };