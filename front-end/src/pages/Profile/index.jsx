import Account from '../../components/Account';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './index.css';

function Profile() {
    return (
        <>
            <Header />
            <div>
                <h2>Edit user info</h2>
                <form>
                    <div className='edit-info'>
                        <label>User Name:</label>
                        <input
                        type='text'
                        />
                    </div>
                    <div className='edit-info'>
                        <label>First Name:</label>
                        <input 
                        type='text'
                        // disabled désactive le champ du formulaire
                        disabled 
                        />
                    </div>
                    <div className='edit-info'>
                        <label>Last Name:</label>
                        <input 
                        type='text' 
                        disabled 
                        />
                    </div>
                    <div className='edit-all-buttons'>
                        <button className='edit-button' type='submit'>
                        Save
                        </button>
                        <button className='edit-button' type='button' 
                        >
                        Cancel
                        </button>
                    </div>
                </form>
                <main className='main bg-dark'>
                    <div className='greeting-content'>
                        <h1 className='greeting'> 
                            Welcome back <br />... 
                        </h1>
                        { /* devoir probablement crée un composant qui affichera nom et prenom */}
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
            </div>
            <Footer />
        </>
    )
}

export default Profile