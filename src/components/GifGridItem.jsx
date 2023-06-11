import React from "react";

const GifGridItem = ({ gif }) => {

  const { id, title, url } = gif;

  return (
    <div className="card animate__animated animate__fadeIn">

      {title ? <h3 className="h2-card">{title}</h3> : null}
      
      <img className="card-img" src={url} alt={title} />
    </div>
  );
};

export default GifGridItem;
