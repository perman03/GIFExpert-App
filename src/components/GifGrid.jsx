import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);
    

  return (
    <>
        <h3>{category}</h3>

        
        <div className='card-grid'>
        {images.map((image)=>(

            <GifGridItem key={image.id}{...image}/>   //renderiza las imagenes e info en la pagina
          
        ))}
        </div>

       


    </>
  )
}


/* El HOOK useEffect nos sirve para realizar efectos secundarios en nuestro codigo,
   en este caso nos sirve para que, a la hora de buscar un nuevo elemento, react
   no tenga que redibujar o renderizar los elementos anteriores */

