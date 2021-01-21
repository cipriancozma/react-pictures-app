import React, { useState } from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const App = () => {

  const [ images, setImages ] = useState([]);

    const onSearchSubmit = async (term) => {
       const res = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
              Authorization: "Client-ID 830d24fd85c12601daf2ec2cb67ac6fc1a26f1a28edd7ca8d816bd0ed4076991"
            }
        })

        setImages(res.data.results);
    }

  return (
    <div className="ui container" style={{marginTop: "10px"}}>
      <SearchBar onSubmit={onSearchSubmit}/>
      <ImageList images={images} />
    </div>
  );
};

export default App;
