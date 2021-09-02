import React, { useState } from 'react';

const Tour = ({id, name, info, image, price, remove}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4>{price}</h4>
        </div>
        <p>{readMore? info: `${info.substring(0, 180)}...`}
        <button onClick={() => setReadMore(!readMore)}>{readMore? 'show Less': 'read more'}</button>
        </p>
        <button className="delete-btn" onClick={()=>remove(id)}>Not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
