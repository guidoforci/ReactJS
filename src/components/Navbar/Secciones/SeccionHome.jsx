import { Link } from "react-router-dom";
const Secciones = () => {
    return (
    <>
        <li className="nav-item">
        <Link className="nav-link" to={"/"} ><button className="btn btn-primary">Inicio</button></Link>
        </li>
    </>
    );
}

export default Secciones;
