import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  margin-top: 0.67em;
  text-decoration: none;
  border: 1px solid #553982;
  padding: 5px 10px;
  align-self: center;
  &:visited,
  :active {
    color: #553982;
  }
`;

export default () => <Button href="/">Back</Button>;
