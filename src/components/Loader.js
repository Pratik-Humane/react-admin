import React from 'react'

export default function Loader({height,width}) {
    return (
      <div className='loader'>
        <img
          src={process.env.PUBLIC_URL + "/assets/images/loader.gif"}
          alt="loader"
          style={{ width: "200px", height: "0%" }}
        />
        <div>data is loading. Please wait...</div>
      </div>
    );
}
