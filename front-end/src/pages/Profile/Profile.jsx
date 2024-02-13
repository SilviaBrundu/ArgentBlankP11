import Account from '../../components/Account/Account';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ErrorProfileAccess from "../../components/ErrorProfileAccess/ErrorProfileAccess"
import './Profile.css';
import FormProfile from '../../components/FormProfile/FormProfile';
import { useSelector } from "react-redux";
import { useState } from 'react';

function Profile() {

    const token = useSelector((state) => state.login.token);
    const user = useSelector((state) => state.user);
    const [editName, setEditName] = useState(false);


    //j'affiche une page d'erreur si utilisateur pas connecté

    if (!token) {
        return (
            <ErrorProfileAccess />
        )
    }

    // ajout pour edit username

    return (
        <>
            <Header />
            <div className='main bg-dark'>
                <main>
                    <div className='greeting-content'>
                        {/* je creer une condition pour faire apparaitre le formulaire edit name */}
                        {!editName ?
                            <>
                                <h1 className='greeting'>
                                    { /* Je récupère le nom et prenom de l'user pour l'afficher ici */}
                                    Welcome back <br /> {user.firstname} {user.lastname}</h1>
                                { /* au click sur le bouton j'ouvre le formulaire de l'user pour pouvoir modifier le username */}
                                <button className='edit-button' onClick={() => setEditName(true)}
                                >
                                    Edit Name
                                </button>
                            </>
                            :
                            <>
                                <FormProfile />

                            </>
                        }
                    </div>

                    <Account
                        title='Argent Bank Checking (x8349)'
                        amount='$2,082.79'
                        description='Available Balance' />
                    <Account
                        title='Argent Bank Savings (x6712)'
                        amount='$10,928.42'
                        description='Available Balance' />
                    <Account
                        title='Argent Bank Credit Card (x8349)'
                        amount='$184.30'
                        description='Current Balance' />
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Profile