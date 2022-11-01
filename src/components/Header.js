import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/productAction'
import { emptyCart } from '../redux/cartAction';

const Header = () => {
    const result = useSelector((state) => state.cartData);
    const dispatch = useDispatch();

    // console.log("data in header", result)

    return(
        <div className="header">
            <div className="search-box">
                <Link to="/">
                    <h1 className='logo'>PatyShop</h1>
                </Link>
                    <input type="text" onChange={(event) => dispatch(productSearch(event.target.value))} placeholder='Search Product' />
                </div>   
            <div>
                <div>
                    <button onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
                </div>
                <Link to="/cart">
                    <div className="cart-div">
                        <span>{result.length}</span>
                        <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart"/>
                    </div>
                </Link>
                
            </div>         
        </div>
    )
}

export default Header;