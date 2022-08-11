import React from "react"; 
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


// First component
export const GIFExpertApp = () => {

    // useState Hook
    const [categories, setCategories] = useState(['Metal Gear', 'Sandman']);
    // Agregar nueva categoria 
    const onAddCategory = () => {
        setCategories([...categories, "Avengers"]);    //insertar nueva categoria
    }

    return (
        <>

        {/* titulo */}
        <h1>Gif Expert App (React Vite) </h1>


        {/* INPUT */}
        <AddCategory/>


        {/* GIF GRID */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            {categories.map(category=>{
                return <li key={category}>{category}</li>
            })}
        </ol>
        
        </>
    )
}