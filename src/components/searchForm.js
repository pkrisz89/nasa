import React from 'react';

export default function(props) {
    return(
        <form>
            <input type="text" name="keyword" value={props.keyword} onChange={props.handleChange}/>
            <button onClick={props.getItems}>Search</button>
            <div>
                <input type="radio" name="mediatype" value="image" checked={props.mediatype === 'image'} onChange={props.handleChange}/> Images
                <input type="radio" name="mediatype" value="audio" checked={props.mediatype === 'audio'} onChange={props.handleChange}/> Audio
            </div>
      </form>
    )
};