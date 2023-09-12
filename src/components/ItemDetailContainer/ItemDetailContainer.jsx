import { React, useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
//import { db } from "./firebase/client";
//import {getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {

      //const productRef = doc(db, "products", "WOigGicyZT9fzr3ralIc") //para un doc especifico

  //const getProduct = () => {
  //  getDoc(productRef).then((snapshot => {
  //    if(snapshot.exists()){
  //      console.log( {id: snapshot.id, ...snapshot.data()} )
  //    }
  //  }))
  //}


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