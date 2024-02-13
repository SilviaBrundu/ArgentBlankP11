import { Link } from 'react-router-dom'
import './ErrorProfileAccess.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function ErrorProfileAccess() {
    return (
        <>
            <Header />
            <main className='main bg-dark'>
                <div className='error_container_all'>
                    <div className='error_container_title'>
                        <h1 className='error_title'>404</h1>
                    </div>
                    <div className='error_container_text'>
                        <p className='error_text'>Please log in to access this page</p>
                    </div>
                    <div className='error_container_link'>
                        <Link to='/signin' className='error_link'>
                            Return to the sign in page
                        </Link>
                        {/* Link remplace la balise a en react  */}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ErrorProfileAccess