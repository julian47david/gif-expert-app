import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {

  const {data:images, loading} = useFetchGifs( category );

  return (
    <div className="container-cards">
      
      <h2 className="catego">{category}</h2>

      { loading && <p>Cargando...</p>}

      <ol className="ol-cards">

        {
          images.map( (gif) => (
            <GifGridItem
              key={gif.id}
              gif={gif} 
            />
          ))
        }
        
      </ol>

    </div>
  );
};

export default GifGrid;
