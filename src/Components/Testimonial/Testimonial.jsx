import React from 'react';

const Testimonial = ({Review, Quoted}) => {
  return <div className="nine__testimonial">
      <div className="nine__testimonial-content">
          <div className="nine__testimonial-content_testimony">
              <p>{`"${Review}"`}</p>
          </div>
          <div className="nine__testimonial-content_quoted"> <p>{`-${Quoted}`}</p></div>
      </div>
  </div>
};

export default Testimonial;
