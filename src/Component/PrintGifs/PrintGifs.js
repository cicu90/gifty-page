import React from "react";
import ImagenItem from "../ImagenItem/ImagenItem";
import useApi from "../../Hooks/useApi";

const PrintGifs = ( {search} ) => {
  const url = ` https://api.giphy.com/v1/gifs/search?api_key=lJdgnNYTZ0o1O3hPfyTBXZh8aKUBwQPu&q=${search}&limit=10`;
  const { loading, data } = useApi(url);

  return (
    <div className="container-gifs">
       {
                loading ?
                    data.map(img => (
                        <ImagenItem
                        key={img.id}
                        title={img.title}
                        url={img.images.downsized_medium.url} />
                    ))
                : ''
            }
    </div>
   );
}
 
export default PrintGifs;