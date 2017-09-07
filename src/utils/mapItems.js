import React from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

const audioFile = '/img/audio.png';

const ImageWrapper = styled.div`
    margin: 10px;
    height: 180px;
    width: 320px;
`;

const Image = styled.img`
    height: 180px;
    width: 320px;
`;

const notFound = mediatype => <h1>No {mediatype} found.</h1>;

const mediaThumbnail = (item, url) => (
    <ImageWrapper key={item.data[0].nasa_id}>
        <LazyLoad once>
            <Image src={url} alt=""/>
        </LazyLoad>
        {item.data[0].title}
    </ImageWrapper>
)

export default function(items, mediatype, searchedBefore) {
    if (!items.length && searchedBefore) {
        return notFound(mediatype)
    }
    return items.map(item => {
        if (item.data[0].media_type === 'audio') {
            return mediaThumbnail(item, audioFile)
        }
        return mediaThumbnail(item, item.links[0].href)
    })
};