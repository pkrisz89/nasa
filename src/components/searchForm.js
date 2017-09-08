import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  font-size: 16px;
  border-top: 2px solid #553982;
  border-bottom: 2px solid #553982;
  border-left: 2px solid #553982;
  border-right: 0px;
  margin: 0;
`;

const SubmitButton = styled.button`
  display: inline-block;
  height: 25px;
  width: 60px;
  color: #d1d5d8;
  background-color: #553982;
  border: 0;
  vertical-align: top;
`;

export default function(props) {
  return (
    <form>
      <div>
        <SearchInput
          type="text"
          name="keyword"
          value={props.keyword}
          onChange={props.handleChange}
        />
        <SubmitButton onClick={props.getItems}>Search</SubmitButton>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="mediatype"
            value="image"
            checked={props.mediatype === 'image'}
            onChange={props.handleChange}
          />{' '}
          Images
        </label>
        <label>
          <input
            type="radio"
            name="mediatype"
            value="audio"
            checked={props.mediatype === 'audio'}
            onChange={props.handleChange}
          />{' '}
          Audios
        </label>
      </div>
    </form>
  );
}
