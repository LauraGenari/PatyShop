import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "../_constants/constant"

export const addToCart = (data) => {
    // console.log("action add", data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeFromCart = (data) => {
    // console.log("action remove", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {
    // console.log("action empty")
    return {
        type: EMPTY_CART
    }
}