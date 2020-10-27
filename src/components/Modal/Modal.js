import React, { useContext } from 'react';
import { ProductContext } from '../../Context/Context'
import Hoc from '../../Hoc/Hoc';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './Modal.css'
import { Link } from 'react-router-dom';
const Modal = () => {
    const product = useContext(ProductContext)
    const {id ,img, title, price} = product.modalProduct
    
    return ( 
        <Hoc>
           { !product.modalOpen ? null :
            <Dialog header="Item Added To The Cart" visible={product.modalOpen} style={{ width: '40vw', height:'100vh' }} onHide={product.closeModal} >
                <div className='containerModal'>
                    <img 
                    src={require(`../../Images/img${id}.jpg`)} 
                    alt='product'
                    width='80%'
                    height='400px' />
                    <h2 className='title'>{title}</h2>
                    <h3 className='price'>price: {price} $</h3>
                    <div>
                        <button
                         className='button blue' 
                         onClick={product.closeModal}>
                             Continue Shopping
                        </button>
                        <Link to='/cart'>
                            <button 
                            className='button yello'
                            onClick={product.closeModal}>
                                Go To Cart
                            </button>
                        </Link>
                    </div>
                </div>
            </Dialog>}
        </Hoc>
     );
}
 
export default Modal;