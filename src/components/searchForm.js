import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  font-size: 32px;
  border-top: 0px;
  border-bottom: 1px solid #553982;
  border-left: 0px;
  border-right: 0px;
  margin: 0px 10px 10px;
  &:focus {
    outline: 0px;
    border-bottom: 2px solid #553982;
    margin-bottom: 9px;
  }
`;

const SubmitButton = styled.button`
  display: inline-block;
  cursor: pointer;
  height: 40px;
  width: 60px;
  color: #553982;
  background-color: #fff;
  border: 0;
  vertical-align: top;
  border: 1px solid #553982;
  &:focus {
    outline: 0px;
  }
  &:visited,
  :active {
    color: #553982;
  }
  &:hover {
    color: #fff;
    background: #553982;
  }
`;

const RadioButtons = styled.div`margin: 5px 10px;`;

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
      <RadioButtons>
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
      </RadioButtons>
    </form>
  );
}
