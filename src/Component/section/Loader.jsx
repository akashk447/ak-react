import React from 'react';
import { Watch } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className='loader'>
        <Watch ariaLabel="loading-indicator" />
    </div>
  )
}

export default Loader