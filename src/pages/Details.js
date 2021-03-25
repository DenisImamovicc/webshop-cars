import style from '../css/Details.module.css';
import { useContext, useEffect, useState } from 'react';
import { CarContext } from '../contexts/CarContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import BuyButtons from '../components/BuyButtons';

import DetailsModal from '../components/DetailsModal';
import { waitForElement } from '@testing-library/dom';




const Details = (props) => {

    const { cars, boughtCheck, checkCarDiscount } = useContext(CarContext);
    const [car, setCar] = useState(null);
    const { formatSum } = useContext(ShoppingCartContext);
    const [showModal, setShowModal] = useState(false);
    const [clickedThumbnail, setClickedThumbnail] = useState(null);

    const modalPicsChevy = ["chevy-front.jpg", "chevy-interior.jpg", "chevy-rear.jpg"]

    const modalPicsOlds = ["olds-front.jpg", "olds-interior.jpeg", "olds-rear.jpg"]

    const modalPicsPanoz = ["panoz-engine.jpg", "panoz-interior.jpg", "panoz-rear.jpg"]



    useEffect(() => {
        findCar()
    }, [car]);

    useEffect(() => {
        findCar()
    }, [props.match.params.id]);

    const findCar = () => {
        if (cars) {
            setCar(
                cars.find((car) => props.match.params.id == car.vin)
            )
        }
    }
    const thumbnailClick = (e) => { 
        setClickedThumbnail(e.target.src)
        setShowModal(true)
    }

    const renderThumbnails = () => {
        if (props.match.params.id == "1D4PT5GK0BW487259") return modalPicsChevy
        if (props.match.params.id == "WAUVT68E95A768929") return modalPicsOlds
        if (props.match.params.id == "WAUKF98E25A286122") { return modalPicsPanoz }
        else { return [] }
    }

    const renderCar = () => {
        return (
            <div className={style.details}>

                <h1 className={`mt-0 ${style.mainHeading}`}>Car details</h1>
                <div className="row g-0">
                    <div className={`col ${style.imageWrapper}`}>
                        <img className={style.carImage} src={car.carImg} alt={`${car.make} ${car.model} ${car.year}`} />
                        {boughtCheck(car) && <img src="/assets/app-components/soldout.png" className={`${style.soldOverlay}`} />}
                    </div>
                    <div className={`col-md-4 ${style.buy}`}>
                        <h3>{car.make} {car.model} {car.year}</h3>
                        <p>{car.city}</p>
                        <h4 className={style.price}>{checkCarDiscount(car)}</h4>
                        <div className={style.buttonWrapper}>
                            <BuyButtons car={car} />
                        </div>
                    </div>
                </div>
                <div className={`row ${style.descContainer}`}>
                    <div className={`col ${style.desc}`}>
                        <h5>Description</h5>
                        <p>{car.descLong}</p>
                    </div>

                    <div className="col-md-4">
                        <ul>
                            <li>Make: {car.make}</li>
                            <li>Model: {car.model}</li>
                            <li>Year: {car.year}</li>
                            <li>Miles: {car.miles}</li>
                        </ul>
                        {/* <Modal /> */}
                        {showModal && <DetailsModal setShowModal={setShowModal} imgPath={clickedThumbnail} />}

                    </div>
                    <div className={style.detailThumbnails}>
                        {renderThumbnails().map((pic, index) =>
                            <div className={style.thumbnailWrapper} key={index}>
                                <img src={`../assets/app-components/discount-detail/${pic}`} className={style.thumbnailImg} onClick={thumbnailClick } alt="car detail" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return car ? renderCar() : <div></div>;
}

export default Details;

