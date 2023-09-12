import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
//import { db } from "./firebase/client";
//import {getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'

const ItemListContainer = () => {

 //   const [products, setProducts] = useState([])
 //   
 //   const productsRef = collection(db, "products")
 //   const getProducts = async () => {
 //       const data = await getDocs(productsRef)
 //       const dataFiltrada = data.docs.map((doc) => ( {...doc.data(), id: doc.id} ))
 //       console.log(dataFiltrada)
 //       setProducts(dataFiltrada)
 //   }
//
 //   useEffect(() => {
 //       getProducts()
 //   },[]);


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() =>{
        setLoading(true);

        const URL = id ? `https://fakestoreapi.com/products/category/${id}` : 'https://fakestoreapi.com/products/'
        const getCollection = fetch(URL);

        getCollection
        .then((res) => res.json())
        .then((res) => {
            setProducts(res)
            setLoading(true)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [id]);

    return(
        <Container>
            <Row style={{alignItems:'stretch', justifyContent:'space-evenly'}}>
                {loading ? <Loader /> : <ItemList products={products}/>}
            </Row>
        </Container>
    );
}

export default ItemListContainer;

<ItemListContainer />