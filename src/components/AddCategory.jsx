import { useState } from "react"

export const AddCategory = () => {
  
    //hook
    const [ inputValue, setInputValue ] = useState('Metal Gear'); 
    
    //componente para ingresar busqueda en input
    const onInputChange = (event) =>{
        setInputValue(event.target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();       //evita refrescar el navegador
        console.log(inputValue); 
    }

  
    return (
    <form onSubmit={(event) => onSubmit(event)}>

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
