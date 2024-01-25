import AccountProfile from '../../components/AccountProfile';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './index.css';

function Profile() {
    return (
        <>
            <Header />
            <main className='main bg-dark'>
                <div className='greeting-content'>
                    <h1 className='greeting'> 
                        Welcome back <br />... 
                    </h1>
                    {/* devoir probablement crée un composant qui affichera nom et prenom */}
                    <button className='edit-button'>
                        Edit Name
                    </button>
                </div> 
            <AccountProfile />
            </main>
            <Footer />
        </>
    )
}

export default Profile