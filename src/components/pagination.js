import React from 'react';
import styled from 'styled-components';

import { findPaginationUrl } from './../utils/paginationHelper';

const Pagination = styled.button`
  display: ${props => (props.hidden ? 'none' : 'inline-block')};
  border: 1px solid #553982;
  padding: 10px 20px;
  margin: 10px;
  color: #553982;
  background: #fff;
  cursor: pointer;
  &:focus {
    outline: 0px;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function(props) {
  let nextLink = findPaginationUrl(props.links, 'next');
  let prevLink = findPaginationUrl(props.links, 'prev');
  return (
    <PaginationContainer>
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
    </PaginationContainer>
  );
}
