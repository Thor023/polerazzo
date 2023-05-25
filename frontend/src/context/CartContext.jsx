import { createContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState(()=>{
        try{
            const productsLocalStorage = localStorage.getItem('cartProducts');
            return productsLocalStorage ? JSON.parse(productsLocalStorage) : [];
        } catch(error){
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartItem));
    }, [cartItem]);

    const addToCart = (product) => {
        const inCart = cartItem.find(productInCart => productInCart.id === product.id)
        
        if(inCart) {
            setCartItem(
                cartItem.map((productInCart)=> {
                    if(productInCart.id === product.id) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Cantidad de producto actualizada',
                            showConfirmButton: false,
                            timer: 1500
                          })
                        return {...inCart, amount: inCart.amount + 1};
                    } else return productInCart;
                })
            );
        } else {
            setCartItem([...cartItem, { ...product, amount: 1}]);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Producto agregado al carrito!',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

    const deleteItemToCart = (product) => {
        const inCart = cartItem.find((productInCart) => productInCart.id === product.id);
        
        if (inCart.amount === 1) {
            setCartItem(cartItem.filter((productInCart) => productInCart.id !== product.id));
        }else {
            setCartItem(cartItem.map((productInCart) => {
                if(productInCart.id === product.id){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Cantidad de producto actualizada',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    return{...inCart, amount: inCart.amount - 1};
                }else return productInCart;
            }))
            }
    }
    return (
        <CartContext.Provider value = {{ cartItem, addToCart, deleteItemToCart }}>
            { children }
        </CartContext.Provider>
    );

}