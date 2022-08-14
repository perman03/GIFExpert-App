import { useState } from "react"



// functional component 
export const AddCategory = ({onNewCategory}) => {
  
    //hook
    const [ inputValue, setInputValue ] = useState(''); 
    
    //componente para ingresar busqueda en input
    const onInputChange = (event) =>{
        setInputValue(event.target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();       //evita refrescar el navegador
        
         // validacion de caracteres
         if ( inputValue.trim().length <= 1) return; 
        // setCategories( categories => [inputValue, ...categories]);
        //borrar input al presionar enter
        setInputValue('');         
        onNewCategory(inputValue.trim()); 
    
    }
  
    return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Busca tu GIF favorito" 
            value={inputValue}
            onChange={onInputChange}>
        </input>

    </form>


  )
}








//cada componente puede tener sus propios estados (hooks)
