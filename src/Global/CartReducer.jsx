export const CartReducer = (state,action) =>
{
    const {shoppingCart,totalPrice,qty} = state;
    let product;
    let updatedQty;
    let updatedPrice;
    let index;
    switch(action.type){
        case 'ADD_TO_CART':
            const check = shoppingCart.find(product => product.id === action.id);
            if(check){
                return state;
            }else{
                product = action.product;
                product['qty'] = 1;
                updatedQty = qty + 1;
                updatedPrice = totalPrice + product.price;
                return {shoppingCart: [product,...shoppingCart],totalPrice:updatedPrice,qty:updatedQty}



            }
            break;
        case 'INCREMENT':
            product = action.cart;
            product.qty = product.qty + 1;
            updatedPrice = totalPrice + product.price;
            updatedQty = qty + 1;
            index = shoppingCart.findIndex(cart => cart.id == action.id);
            shoppingCart[index] = product;
            return {shoppingCart: [...shoppingCart],totalPrice:updatedPrice,qty:updatedQty}
            break;
        case 'DECREMENT':
            product = action.cart;
            if(product.qty > 1){
                product.qty = product.qty - 1;
                updatedPrice = totalPrice - product.price;
                updatedQty = qty - 1;
                index = shoppingCart.findIndex(cart => cart.id == action.id);
                shoppingCart[index] = product;
            }else{
                return state;
            }
            return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice, qty: updatedQty}
            break;
        case 'DELETE':
            product = action.cart;
            let filtered = shoppingCart.filter((product) => {
                return product.id !== action.id;
            })
            updatedPrice = totalPrice - product.price * product.qty;
            updatedQty = qty - product.qty;
            return {shoppingCart:[...filtered],totalPrice:updatedPrice,qty:updatedQty}
            break;
        default:
            return state;
        }
}