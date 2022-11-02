
import { addToCart, removeFromCart } from '../redux/_actions/cartAction';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/_actions/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { productData } from '../redux/_selectors/selectors'

function Main() {
  const dispatch = useDispatch()

  let data = useSelector( productData )  
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
              <span className="float-qtd">0</span>
              <div>{item.name}</div>
              <div>{item.color}</div>
              <div>{item.price}</div>      
              <br/> 
              <div>
                <button onClick={()=>dispatch(addToCart(item))}>Add to cart</button>
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
