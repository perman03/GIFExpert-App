import React from "react"; 
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

// First component
export const GIFExpertApp = () => {

    // useState Hook
    const [categories, setCategories] = useState(['ARTHUR MORGAN']);
    // Agregar nueva categoria 
    const onAddCategory = (newCategory) => {
        
        if(categories.includes(newCategory.toUpperCase())) return;    //validacion para nombres unicos y no repetibles. Se convierte todo a mayusculas
        setCategories([newCategory.toUpperCase(), ...categories]);    //insertar nueva categoria
    }

    return (
        <>

        {/* titulo */}
        <h1 class='header__titulo'>Gif Expert App </h1>
        <p class='header__info'>GIFs para ti. Gifs para todos :)</p>


        {/* INPUT */}
        <AddCategory 
            // setCategories = {setCategories} 
        
            onNewCategory={onAddCategory}   //props que se manda a AddCategory
        />


        {/* GIF GRID */}

        {categories.map((category)=>(
            <GifGrid key={category} 
            category = {category} 

            />       // utiliza el GifGrid component          
            ))
        }


        
        </>
    )
}