
import { addToCart, removeFromCart } from '../redux/cartAction';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function Main() {
  const dispatch = useDispatch()

  let data = useSelector((state)=>state.productData)  
  // console.log('data in main', data)

  useEffect(()=>{
    dispatch(productList())
  }, []);

  return (
    <div>
      <br/>
      <div className='main-container'>
        {
          data.map((item)=> 
          <span>
            <div>
              <img src={item.src} alt="product" height="300px" width="300px"/>
              <div>{item.name}</div>
              <div>{item.color}</div>
              <div>{item.price}</div>      
              <br/> 
              <div>
                <button onClick={()=>dispatch(addToCart(item))}>Add to cart</button>
              </div>       
              <br/>  
              <div>
                <button onClick={()=>dispatch(removeFromCart(item.id))}>Remove from cart</button>
              </div>        
              <br/> 
            </div>
          </span>
          )
        }

      </div>
    </div>
  );
}

export default Main;
