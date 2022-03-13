import React from 'react';
import spinnerGif from '../assets/spinner.gif';
function Spinner() {
  return (
    <img
      src={spinnerGif}
      alt='Loading...'
      style={{
        width: '100px',
        margin: 'auto',
        display: 'block',
      }}
    />
  );
}

export default Spinner;
