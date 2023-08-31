import { useEffect, useState, useContext, createContext } from "react";

const mockProductos = [{
    titulo: 'Remera',
    precio: 6000,
    descripcion: 'lorem 1',
},
{
    titulo: 'Pantalon',
    precio: 12000,
    descripcion: 'lorem 2',
},
{
    titulo: 'Buzo',
    precio: 18000,
    descripcion: 'lorem 3',
}]

export const ShopContext = createContext();

export const ShopComponentContext = ({children}) =>{
    const [productos, setProductos] = useState([]);

    const limpiarProductos = () =>{
        setProductos([])
    }

    useEffect(() => {
        setProductos(mockProductos)
    }, [])

    return <ShopContext.Provider value={{productos, limpiarProductos}}>
        {children}
    </ShopContext.Provider>
}