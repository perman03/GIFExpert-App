import { useEffect } from 'react';
import {getGifi} from '../helpers/getGifi'

export const GifGrid = ({category}) => {

    useEffect( () => {     
      getGifi(category);
    },[])
    

  return (
    <>
        <h3>{category}</h3>




    </>
  )
}


/* El HOOK useEffect nos sirve para realizar efectos secundarios en nuestro codigo,
   en este caso nos sirve para que, a la hora de buscar un nuevo elemento, react
   no tenga que redibujar o renderizar los elementos anteriores */