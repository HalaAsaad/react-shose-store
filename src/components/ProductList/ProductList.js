import React, { useState, useContext } from 'react';
import { Product, Title } from '..';
import Hoc from '../../Hoc/Hoc';
import { ProductContext } from '../../Context/Context';
import 'primeflex/primeflex.css';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import './ProductList.css'
const ProductList = () => {
    const prod = useContext(ProductContext)
   // console.log(product)
    return ( 
    <Hoc>
        <Title name='our' title='products' />
        <div className="p-grid p-justify-center" style={{margin:'0px'}}>
            {prod.products.map((product,id) =>{
            console.log(id)
                return (
                    <div key={product.id} className="p-col p-sm-12 p-md-6 p-lg-3">
                        <div className="box container">
                            <Product key={product.id} product={product} />
                            <span>
                                <button
                                className='Button'
                                style={{cursor:product.inCart?'not-allowed':'pointer'}}
                                disabled={product.inCart?true:false}
                                onClick={() => {
                                    prod.addToCart(product.id);
                                    prod.openModal(product.id);
                                }
                                }>
                                    {product.inCart
                                    ?'IN CART'
                                    :(<i className="pi pi-shopping-cart" style={{fontSize:'1.4rem'}}></i>)}
                                </button>
                            </span>
                        </div>
                    </div>)
                })}
         </div>
    </Hoc>
     );
}
 
export default ProductList;