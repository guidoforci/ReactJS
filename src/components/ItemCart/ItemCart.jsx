import { BsTrash } from "react-icons/bs";
import { useCarritoContext } from "../../Context/CarritoContext"
import { useDarkModeContext } from '../../Context/DarkModeContext'


export const ItemCart = ({ item }) => {
    const {removeItem} = useCarritoContext()
    const {darkMode} = useDarkModeContext();

    return (
        <div className={`card mb-3 ${darkMode ? 'cardCart' : 'cardCartDark'}`}>
            <div className="row g-0 cardFlex">
                <div className="col-md-4">
                    <img src={item.img} alt={`Imagen de producto ${item.nombre}`} className="img-fluid rounded-start imagenCart" />
                </div>
                <div className="col-md-8">
                    <div className="card-body cuerpoCard">
                        <h5 className={`card-title ${darkMode ? 'tituloCard' : 'tituloCard'}`}>{item.nombre} {item.modelo}</h5>
                        <p className="card-text detalleCard">CANTIDAD: {item.cant}</p>
                        <p className="card-text detalleCard">PRECIO UNITARIO: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <p className="card-text detalleCard">SUBTOTAL: $ {new Intl.NumberFormat('de-DE').format(item.precio * item.cant)}</p>
                        <button className="btn btn-primary eliminarProducto" onClick={() => removeItem(item.id)}><BsTrash size="23" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

