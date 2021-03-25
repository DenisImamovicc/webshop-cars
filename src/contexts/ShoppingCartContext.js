import { createContext, useState, useEffect, useContext } from "react";
import { CarContext } from "./CarContext";

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = (props) => {
    const { discountedCars } = useContext(CarContext);

    // Check local storage to see if there are any cars in the cart since before
    const [shoppingCartItems, setShoppingCartItems] = useState(
        () => {
            const localData = localStorage.getItem('shoppingCartItems');
            return localData ? JSON.parse(localData) : []
        }
    );
    const [cartTotal, setCartTotal] = useState(0);

    // Adds the price of all items in cart together on change in cart-array
    useEffect(() => {
        setCartTotal(shoppingCartItems.reduce((sum, curr) => sum + curr.price, 0));
    }, [shoppingCartItems]);

    // Check if car is discounted and add new price if it is
    // Set the cart array by creating a new array, adding the new item at the front of the array, then spreading out the old array after.
    const addToCart = (newItem) => {
        let isDiscounted = discountedCars.find(discountedCar => discountedCar.vin === newItem.vin);
        if (isDiscounted) {
            newItem.price = isDiscounted.discountedprice();
        }
        setShoppingCartItems([newItem, ...shoppingCartItems]);
    }

    // Removes the clicked item using filter, comparing vin-numbers
    const removeFromCart = (itemToRemove) => {
        setShoppingCartItems(shoppingCartItems.filter(item => item.vin !== itemToRemove.vin));
    }

    // Set the shopping cart to an empty array
    const removeAllFromCart = () => {
        setShoppingCartItems([]);
    }

    // This function can be used to get date, time and day
    // For receipt only date is needed I think, the rest is "just in case"
    // Choose the one you need with createTimeStamp()[index], or save all in a variable
    const createTimeStamp = () => {
        const timestamp = new Date();
        const date = timestamp.toLocaleDateString('sv-SE');
        const time = timestamp.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' });
        const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = dayArray[timestamp.getDay()];

        return [date, time, day];
    }

    // Set localStorage when cart updates
    useEffect(() => {
        localStorage.setItem('shoppingCartItems', JSON.stringify(shoppingCartItems))
    }, [shoppingCartItems]);

    const values = {
        shoppingCartItems,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        createTimeStamp,
        cartTotal,
    }

    return (
        <ShoppingCartContext.Provider value={values}>
            {props.children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;