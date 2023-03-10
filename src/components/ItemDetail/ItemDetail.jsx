//Contador
import { ItemCount } from '../ItemCount/ItemCount'

//Link para el Botón "Finalizar Compra"
import { Link } from "react-router-dom"

//Context
import { useDarkModeContext } from '../../Context/DarkModeContext'
import { useCarritoContext } from '../../Context/CarritoContext'


export const ItemDetail = ({ item }) => {
    const {darkMode} = useDarkModeContext()
    const {addItem} = useCarritoContext()

    const onAdd = (cantidad) => { //Agregar el producto al carrito
        addItem(item,cantidad)
    }
    return (
        
        <div className='container detalle'>
            <div className= "col-md-3">
                <img src={item.img} className="img-fluid rounded-start imgDetail" alt={`Imagen de ${item.nombre}`} />
            </div>
            <div className="col">
                <div className={`card-body ${darkMode ? 'itemDetail' : 'itemDetailBodyDark'}`}>
                    <h5 className='card-title'>{item.nombre} {item.modelo}</h5>
                    <p className='card-text'>Marca: {item.marca}</p>
                    <p className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className='card-text'>Stock: {item.stock}</p>
                    <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd}/>
                </div>
                <Link className="nav-link" to={'/cart'}><button className='btn btn-primary finalizarcompra'>Finalizar Compra</button></Link>
            </div>
        </div>
    )
}
