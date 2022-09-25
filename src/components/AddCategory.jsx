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
        
         // validacion de caracteres para que no registre carcateres vacios o de solo un caracter
         if ( inputValue.trim().length <= 1) return; 
        // setCategories( categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());    
        setInputValue('');          //borrar input al presionar enter 
        
    
    }
  
    return (
    <form onSubmit={onSubmit}>
        <input class = 'input'
            type="text" 
            placeholder="Busca tu GIF favorito" 
            value={inputValue}
            onChange={onInputChange}>
        </input>

    </form>


  )
}








//cada componente puede tener sus propios estados (hooks)
