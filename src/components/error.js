import styled from 'styled-components';
import React from 'react';

const Error = styled.div`
display: ${props => props.hidden ? 'none' : 'block'};
color: red;
width: 380px;
border: 1px solid red;
padding: 5px 10px;
margin: 0 auto;
`

export default (error) => error ? <Error>There was an error during search. Please try again.</Error> : undefined;