import React, { useState, useEffect } from 'react';
import { storeProducts, detailProduct } from '../Data/Data';
import useStateWithCallback from 'use-state-with-callback';

export const ProductContext = React.createContext();

const ProductProvider = (props) => {
    const [state, setState] = useStateWithCallback({
        products: storeProducts.map(x => ({...x})),
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct:detailProduct
    }, () => { console.log('hello from detail');})

    useEffect(()=>{
      console.log(state)
    },[state.cart])
    const getItem = id => {
      const product = state.products.find(item => item.id === id);
      return product
    }
    const openModal = id => {
      const product = getItem(id)
      setState({
        ...state,
        modalProduct:product,
        modalOpen: true
      })
    }
    const closeModal = () => {
      setState({
        ...state,
        modalOpen: false
      })
    }
    const handleDetail = (id) => {
        console.log('hello from detail');
        const product = getItem(id);
        setState({
          ...state,
          detailProduct: product
        })
        return state;
    }
    const addToCart = id => {
        console.log(`add to cart id: ${id}`)
        let tempProducts = [...state.products];
        const index= tempProducts.indexOf(getItem(id));
        const product = tempProducts[index]
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        setState({
          ...state,
          products: tempProducts,
          cart: [...state.cart, product]
        })
       
        return state;
    }
    return (
      <ProductContext.Provider 
      value={{
          ...state,
          handleDetail: handleDetail,
          addToCart: addToCart,
          openModal:openModal,
          closeModal:closeModal
          }}>
        {props.children}
      </ProductContext.Provider>
    );
  }

export default ProductProvider;