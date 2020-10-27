import React, { useContext } from 'react';
import Hoc from '../../Hoc/Hoc';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../Context/Context';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import '../ProductList/ProductList.css'

const Product = (props) => {
    const prod = useContext(ProductContext)
    console.log(prod)
    const {id, title, img, price, inCart, addToCart}= props.product
    return ( 
        <div onClick={() => prod.handleDetail(id)} >
            <Card  className="ui-card-shadow" >
                <div className='headerContainer'>
                    <Link to='/details'>
                        <abbr title='click for more details'>
                        <div className='ImgContainer'>
                            <img 
                            className='Img'
                            width='100%'
                            alt="Card" height='250px' 
                            src={require(`../../Images/img${id}.jpg`)} 
                            onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                        </div>
                        </abbr>
                    </Link>
                    <span style={{fontSize:'1.4rem'}}>
                        <strong><i> {price} $</i></strong>
                    </span>
                    <span style={{fontFamily:'Oswald', marginLeft:'25%',fontWeight:'bolder'}}>
                        <strong>{title}</strong>
                    </span>
                </div>
            </Card>
        </div>
     );
}
 
export default Product;