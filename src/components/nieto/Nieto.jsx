import React, {useContext} from "react";
import { ShopContext } from "../../context/shopContext";

const Nieto = () => {

    const {productos, limpiarProductos} = useContext(ShopContext)


    return (
        <div>
            Mis Productos
            <button onClick={limpiarProductos}>Limpiar</button>
            {productos.map((prod, index) => {
                return(
                    <div className="card" key={index}>
                        <p>{prod.titulo}</p>
                        <p>{prod.descripcion}</p>
                        <p>{prod.precio}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Nieto
