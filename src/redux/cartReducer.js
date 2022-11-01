import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant"

export const cartData = (data=[], action) => {
    switch(action.type){
        case ADD_TO_CART: 
            // console.log("ADD reducer ", action)
            const index = data.indexOf(action.data)
            if( index === -1 ){
                console.log(data)           
                return [action.data, ...data]}
            else {
                data[index]['qtd'] ? data[index]['qtd']++ : data[index]['qtd'] = 2
                console.log(data[index])
                return [...data]}
        case REMOVE_FROM_CART: 
            // console.log("REMOVE reducer ", action)
            const remainingItems = data.filter((item)=>item.id !== action.data)
            return [...remainingItems]
        case EMPTY_CART: 
            // console.log("EMPTY reducer ", action)
            data = []
            return [...data]
        default:
            return data
    }
}