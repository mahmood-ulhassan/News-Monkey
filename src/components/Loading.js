import React from 'react';
import loader from '../loader.gif';

const Loading = () => {
  return (
    <div className='container center-content'>
      <div className='row'>
        <div className='col text-center'>
          <img src={loader} alt="Loading..." />
        </div>
      </div>
    </div>
  );
};

export default Loading;
