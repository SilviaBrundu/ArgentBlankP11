import { Link } from 'react-router-dom'
import './index.css';
//permet de renvoyer sur la page d'accueil

function Error() {
    return (
        <div className='error_container_all'>
            <div className='error_container_title'>
                <h1 className='error_title'>404</h1>
            </div>
            <div className='error_container_text'>
                <p className='error_text'>Oops! The page you are requesting does not exist.</p>
            </div>
            <div className='error_container_link'>
                <Link to='/' className='error_link'>
                Return to the home page
                </Link>
                {/* Link remplace la balise a en react  */}
            </div>
        </div>
    )
}
 
export default Error