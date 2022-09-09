
export const GifGridItem = ({title, url, id}) => {
  
  
  
  //html para mostrar imagenes
  return (
    <div className="card">
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}

//pendiente: className y terminar proyecto para eventualmente mejorar el UI
