import { useEffect, useState } from 'react';
import {getGifi} from '../helpers/getGifi'

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
      const newImages = await getGifi(category); 
      setImages(newImages); 
    }

    useEffect( () => {     
      getImages();
    },[])
    

  return (
    <>
        <h3>{category}</h3>

        
        <ol>
        {images.map(({id, title})=>(

            <li key={id}>{title}</li>   //renderiza id y titulo del gif
          
        ))}
        </ol>

       


    </>
  )
}


/* El HOOK useEffect nos sirve para realizar efectos secundarios en nuestro codigo,
   en este caso nos sirve para que, a la hora de buscar un nuevo elemento, react
   no tenga que redibujar o renderizar los elementos anteriores */

