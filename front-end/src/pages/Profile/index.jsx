import Account from '../../components/Account';
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
                <Account
                    title='Argent Bank Checking (x8349)'
                    amount='$2,082.79'
                    description='Available Balance'/>
                <Account
                    title='Argent Bank Savings (x6712)'
                    amount='$10,928.42'
                    description='Available Balance'/>
                <Account
                    title='Argent Bank Credit Card (x8349)'
                    amount='$184.30'
                    description='Current Balance'/>
            </main>
            <Footer />
        </>
    )
}

export default Profile