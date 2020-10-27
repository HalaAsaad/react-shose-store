import React, { useContext } from 'react';
import { ProductContext } from '../../Context/Context';
import { Link } from 'react-router-dom';
import 'primeflex/primeflex.css';
import Hoc from '../../Hoc/Hoc';
import './Details.css'
const Details = () => {
    const product = useContext(ProductContext)
    const {id, company, info,title, img, price, inCart}= product.detailProduct
    console.log(img)
    return ( 
    <Hoc>
    <div className='container'>
      {/*  <div className="p-grid Details">
            <div className="p-col-6 p-offset-3">
                <div className="box">
                    <h1>{title}</h1>
                </div>
            </div>
    </div> */}
        <div className="p-grid Details">
            <div className="p-col-12 p-md-6 p-lg-6">
                <img 
                width='100%'
                height='100%'
                src={require(`../../Images/img${id}.jpg`)}
                alt='product' 
                onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
            </div>
            <div className="p-col-12 p-md-6 p-lg-6">
                <h1 className='title'>Model: {title}</h1>
                <h3 className='text-title company'>made by: {company} </h3>
                <h3 className='text-blue price'>
                    <strong>price: <span>$</span> {price} </strong>
                </h3>
                <p className='p'>
                    some info about product: 
                    <p className='p pColor'> {info} </p>
                </p>
                <div>
                <Link to='/'>
                    <button className='button'>Back To Products</button>
                </Link>
                <Link to='/cart'>
                    <button 
                    className='button2'
                    disabled={inCart? true : false}
                    style={{cursor:inCart?'not-allowed':'pointer'}}
                    onClick={() => {
                        product.addToCart(id);
                        product.openModal(id);
                        }}>
                        {inCart? 'InCart' : 'Add To Cart'}
                    </button>
                </Link>
            </div>
            </div>
        </div>
    </div>
    </Hoc>
     );
}
 
export default Details;