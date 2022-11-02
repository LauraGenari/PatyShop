import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartData } from "../redux/_selectors/selectors";

const Cart = () => {
    const cart = useSelector(cartData);
    const amount = cart.length && cart.map(item=>item.price*(item.qtd || 1)).reduce((prev, next)=>prev+next)

    return (<div>
        <div className="go-back"> 
            <img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="back"/>
            <Link to="/" >Go to Products Link</Link>       
        </div>
        <h1>Cart Page</h1>
        <div className="table-container">
            <table>
                <tr>
                    <td>Name</td>
                    <td>Thumb</td>
                    <td>Color</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total Price</td>
                </tr>
                {                    
                    cart.map((item) => {
                        return <tr key={item.key}>
                            <td>{item.name}</td>
                            <td> <img src={item.src} alt="product" height="50px" width="50px"/></td>
                            <td>{item.color}</td>
                            <td>{item.price}</td>
                            <td>{item.qtd || 1}</td>
                            <td>{item.price*(item.qtd || 1)}</td>
                        </tr>
                    })
                }
            </table>
            <div className="price-data">
                <div><span>Amount</span><span>{amount}</span></div>
                <div><span>Discount</span><span>{amount/10}</span></div>
                <hr/>
                <div><span>Tax</span><span>000</span></div>
                <div><span>Total</span><span>{amount-(amount/10)}</span></div>
            </div>
        </div>
    </div>)
}

export default Cart;