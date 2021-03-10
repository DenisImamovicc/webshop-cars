import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import { CarContext } from "../contexts/CarContext";
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import style from '../css/CarCard.module.css';

const CarCard = (props) => {
    const history = useHistory();
    const { addToCart, removeFromCart, shoppingCartItems, formatSum } = useContext(ShoppingCartContext);
    const { viewCar, boughtCars } = useContext(CarContext);

    const renderButtons = (car) => {
        let inCart = false;
        let bought = false;
        shoppingCartItems.forEach(cartItem => {
          if (cartItem.vin === car.vin) {
            inCart = true;
          } 
        });
        boughtCars.forEach(boughtItem => {
          if (boughtItem.vin === car.vin){
            bought = true;
          }
        });
        if (inCart) {
          return <button onClick={() => removeFromCart(car)} className={`btn btn-danger ${style.btnCustom}`} id="addRemove">Remove</button>
        } else if (bought){
          return <button className={`btn btn-secondary ${style.disabled} ${style.btnCustom}`} id="addRemove">Sold</button>
        } else {
          return <button onClick={() => addToCart(car)} className={`btn btn-primary ${style.btnCustom}`} id="addRemove">Add To Cart</button> 
        }
      }


    return (
        <div className={`${style.carCards}`}>
            <div className={`${style.carCard}`} onClick={(e) => {
                if (e.target.id !== "addRemove") {
                    viewCar(props.car, history)
                }
            }}>
                <div className={style.imgWrapper}>
                  <img src={props.car.carImg} className={`${style.carImg}`}alt="A good affordable car" />
                  <h5 className={`${style.cardPrice}`}>{formatSum(props.car.price)}</h5>
                </div>
                <div className={`${style.desc}`}>
                    <div className={style.infoRow}>
                      <h5 className={`${style.cardTitle}`}>{props.car.make} {props.car.model} {props.car.year}</h5>
                      <p className={`${style.cardDesc}`}>{props.car.descShort}</p>
                    </div>
                    <div className={style.buyRow}>
                      
                      <button className={`btn btn-secondary ${style.btnCustom}`}>Read more</button>
                      { renderButtons(props.car) }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarCard;