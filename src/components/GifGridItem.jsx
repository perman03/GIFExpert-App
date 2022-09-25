export const GifGridItem = ({title, url, id}) => {
  
  
  
  //html para mostrar imagenes
  return (
    <div className="card">
        <img className="card__imagen" src={url} alt={title}></img>
        <p className="card__titulo">{title}</p>
    </div>
  )
}

//pendiente: className y terminar proyecto para eventualmente mejorar el UI
