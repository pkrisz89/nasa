import React, { Component } from 'react';
import styled from 'styled-components';

import { findPaginationUrl } from './../utils/paginationHelper';

const Pagination = styled.button`
  display: ${props => (props.hidden ? 'none' : 'inline-block')};
`;

export default function(props) {
  let nextLink = findPaginationUrl(props.links, 'next');
  let prevLink = findPaginationUrl(props.links, 'prev');
  return (
    <div>
      <Pagination
        hidden={!prevLink}
        onClick={e => {
          e.preventDefault();
          props.addToCollection(findPaginationUrl(props.links, 'prev').href);
        }}
      >
        PREVIOUS
      </Pagination>
      <Pagination
        hidden={!nextLink}
        onClick={e => {
          e.preventDefault();
          props.addToCollection(findPaginationUrl(props.links, 'next').href);
        }}
      >
        NEXT
      </Pagination>
    </div>
  );
}
