// CODIGO PARA TRAER LA INFORMACION DE LOS GIFS

export const getGifi = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BTCgOqux5XQ62lQ5wyRKNawHM0UhAFaC&q=${category}&limit=11`
    const resp = await fetch(url);
    const {data} = await resp.json(); 
    
    //extraer de la data solo el id, el titulo y la url
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs); 


}

