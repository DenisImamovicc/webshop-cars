import style from '../css/Hero.module.css';
import Carousel from './DiscountCarousel';

const Hero = () => {
    return (
        <div className={style.hero}>
            <div className={`${style.heroCenterDiv} ${style.flexCenter}`}>
                <div className={`row ${style.flexCenter}`}>
                    <div className="col-12 col-md-4">
                        <h1 className={`${style.h1}`}>Welcome to the most reliable car shop</h1>
                        <p className={`${style.p}`}>A car is special. It reflects who you are. Here on Richard Ryan's Reliable Rides we offer you realiable vessels that will last many years and accompany you through life's many adventures.</p>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className={`${style.gradient} ${style.carousel}`}>
                            <Carousel/>
                            <img className={style.saleSign} src="../assets/carousel/sale.svg"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;