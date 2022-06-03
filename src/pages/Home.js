import {Link} from 'react-router-dom';
import Bienvenida from '../assets/images/BienvenidaHome.png';
import Carousel from '../components/Carousel';
import '../styles/styleHome.css';

const Home = () => {
    return(
        <>
        <div className='home-container'>
            <img className='bienvenida-home' src={Bienvenida} alt='Bienvenido Entrenador!!' />
        </div>
        
        <article className='card'>
            <div className='card-content'>
                <Link to='/information'><h3 className='card-title'>Conoce Más!!</h3></Link>
                <p className='card-description'>Encontra toda la info de los pokemones y conoce un poco mas!</p>
            </div>
        </article>
        <article className='card-2'>
            <div className='card-content-2'>
                <Link to='/pokebola'><h3 className='card-title'>Entrenador!!</h3></Link> 
                <p className='card-description'>Convertite en un buen entrenador y conoce a todos los pokemons!</p>
            </div>
        </article>
        <article className='card-3'>
            <div className='card-content-3'>
                <Link to='/contact'><h3 className='card-title'>Comunicate!!</h3></Link>
                <p className='card-description'>Contacte con nosotros, sacate las dudas que tengas y conoce nuestras redes sociales!</p>
            </div>
        </article>
        
        <div className='container-carousel'>
        <Carousel />
        </div>
        </>
    )
}
export default Home;