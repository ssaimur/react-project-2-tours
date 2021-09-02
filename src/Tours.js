import React from 'react';
import Tour from './Tour';
const Tours = ({tour, remove}) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tour.map(item => {
          return (
            <Tour key={item.id} {...item} remove={remove}/>
          )
        })}
      </div>
    </section>
  );
};

export default Tours;
