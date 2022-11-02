import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "../../redux/_constants/constant"

export const cartData = (data=[], action) => {
    switch(action.type){
        case ADD_TO_CART: 
            const indexAdd = data.indexOf(action.data)
            
            console.log('add',indexAdd,data, action)
            if( indexAdd === -1 ){   
                action.data['qtd']++    
                return [action.data, ...data]}
            else {
                data[indexAdd]['qtd']++ 
                return [...data]}
        case REMOVE_FROM_CART: 
            data.forEach((item, i)=>item.id === action.data ? item.qtd > 1 ? item.qtd-- : data.splice(i,1) : '')
            console.log('rm', data, action)       
            return [...data]                
        case EMPTY_CART: 
            data = []
            return [...data]
        default:
            return data
    }
}