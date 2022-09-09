// CUSTOM HOOKS

import { useEffect, useState } from "react";
import { getGifi } from "../helpers/getGifi";

export const useFetchGifs = ( category ) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
      const newImages = await getGifi(category); 
      setImages(newImages); 
      setIsLoading(false); 
    }

    useEffect( () => {     
      getImages();
    },[])

    return {
        images,
        isLoading
    }

}
