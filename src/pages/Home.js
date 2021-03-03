import style from '../css/Home.module.css';
import CarList from '../components/CarList';
import Search from '../components/Search';

const Home = () => {
    return ( 
        <div>
            <Search />
            <CarList />
        </div>
     );
}
 
export default Home;