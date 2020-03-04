import React from 'react';
import styled from 'styled-components';

function Room({ stuff }) {
    console.log(stuff)
  if (stuff) {
    return (
      <div
        style={{
          width: '58px',
          height: '38px',
          borderBottom: stuff.s_to
            ? null
            : '1px solid rgba(0,0,0,1)',
          borderTop: stuff.n_to
            ? null
            : '1px solid rgba(0,0,0,1',
          borderLeft: stuff.w_to
            ? null
            : '1px solid rgba(0,0,0,1',
          borderRight: stuff.e_to
            ? null
            : '1px solid rgba(0,0,0,1)'

        }}
      ></div>
    );
  } else {
    return <h2>Loading</h2>;
  }
}

export default Room;
