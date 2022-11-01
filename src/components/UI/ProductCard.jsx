import {motion} from 'framer-motion';
import {Link} from 'react-router-dom'

function ProductCard({id, product}) {
    return ( 
        // to='/all/:id'
                <Link to={'/home/'+ (id+1)} style={{textDecoration: 'none'}}>
                    <div className="product-item">
                        <motion.div whileHover={{scale: 0.9}} className="product-img">
                            <img src={product.imageURL} alt="img" />
                        </motion.div>
                        <div className='product-info'>
                            <h3 className="product-name" style={{color: '#131e3b'}}>{product.productName}</h3>
                            <span>
                                <p style={{color: 'gray'}}>chair</p>
                            </span>
                            <div className="product-card-bottom">
                                <span className="price" style={{color: '#131e3b'}}>${product.price}</span>
                                <motion.span whileTap={{scale : 1.2}} className='add-to-cart'><i class="ri-add-line"></i></motion.span>
                            </div>

                        </div>
                    </div>
                </Link>
     );
}

export const ProductCard1 = (id) => (
    <Link to='/all/:id' style={{textDecoration: 'none'}}>
                    <div className="product-item">
                        <motion.div whileHover={{scale: 0.9}} className="product-img">
                            <img src="https://github.com/codingwithmuhib/Maltimart-ecommerce/blob/start-up/src/assets/images/arm-chair-01.jpg?raw=true" alt="" />
                        </motion.div>
                        <div className='product-info'>
                            <h3 className="product-name" style={{color: '#131e3b'}}>Modern Armchair</h3>
                            <span>
                                <p style={{color: 'gray'}}>{id}</p>
                            </span>
                            <div className="product-card-bottom">
                                <span className="price" style={{color: '#131e3b'}}>$299</span>
                                <motion.span whileTap={{scale : 1.2}} className='add-to-cart'><i class="ri-add-line"></i></motion.span>
                            </div>

                        </div>
                    </div>
                </Link>
)

export default ProductCard;