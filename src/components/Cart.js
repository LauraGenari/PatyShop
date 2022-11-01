import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    const amount = cartData.length && cartData.map(item=>item.price*(item.qtd || 1)).reduce((prev, next)=>prev+next)

    // console.log(group())
    return (<div>
        <button><Link to="/" >Go to Products Link</Link></button>
        <h1>Cart Page</h1>
        <div className="table-container">
            <table>
                <tr>
                    <td>Name</td>
                    <td>Color</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total Price</td>
                </tr>
                {                    
                    cartData.map((item) => {
                        return <tr key={item.key}>
                            <td>{item.name}</td>
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