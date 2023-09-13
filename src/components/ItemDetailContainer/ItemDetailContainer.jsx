import { React, useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';

const ItemDetailContainer = () => {
    const [product, setProducts] = useState({})
    const [loading, setLoading] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        const docReference = doc(db, 'products', id)
        getDoc(docReference)
            .then((res) => {
                setProducts({ id: res.id, ...res.data() })
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