import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default function() {
  return (
    <LoadingContainer>
      <img src="/img/loading.gif" alt="loading" />
    </LoadingContainer>
  );
}
