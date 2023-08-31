import { React, useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProducts] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        const URL = `https://fakestoreapi.com/products/${id}`; 
        const getItem = fetch(URL);

        getItem
        .then((res) => res.json())
        .then((res) => {
            setProducts(res)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [id])

    return (
        <>
            {loading ? <Loader /> : <ItemDetail product={product} />}
        </>
    );
}

export default ItemDetailContainer;