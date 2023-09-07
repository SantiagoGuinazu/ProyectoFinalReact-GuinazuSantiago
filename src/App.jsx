import './App.css'
import Router from './router/Router'

import { db } from "./firebase/client";
import {getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'
import { useEffect } from 'react';



function App() {

  const productsRef = collection(db, "products")
  const getProducts = async () => {
    const data = await getDocs(productsRef)
    const dataFiltrada = data.docs.map((doc) => ( {...doc.data(), id: doc.id} ))
    console.log(dataFiltrada)
  }
  //const productRef = doc(db, "products", "WOigGicyZT9fzr3ralIc") //para un doc especifico

  //const getProduct = () => {
  //  getDoc(productRef).then((snapshot => {
  //    if(snapshot.exists()){
  //      console.log( {id: snapshot.id, ...snapshot.data()} )
  //    }
  //  }))
  //}


  useEffect(() => {
    //getProduct()
    getProducts()
  }, [])

  return (
    <Router />
  )
}

export default App
