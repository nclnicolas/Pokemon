import {Link } from "react-router-dom";
import Linkedin from '../assets/images/linkedin-icon.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import '../styles/styleFooter.css'


const Footer = () => {
    return(
        <>
            <div className="footer">
                <h3 className='mundo-footer'>Mundo Pokemon</h3>
            <div className="angle">
            <FontAwesomeIcon icon={faAngleRight} className='icon-footer'/><h3 className='h3-footer'>Ayuda</h3>
            <FontAwesomeIcon icon={faAngleRight} className='icon-footer' /><h3 className='h3-footer'>Nosotros</h3>
            </div>
            <div className="linke">
            <h3 className='mundo-footer'>Redes</h3>
            <a href="https://www.linkedin.com/in/nclenriquez/"><img className='linkedin-icon' src={Linkedin} alt="" /></a>
            </div>
            <p>Gracias por visitarnos</p>
            </div>
        </>
    )
}
export default Footer;