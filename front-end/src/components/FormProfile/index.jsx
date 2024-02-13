
import './index.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findProfileInfo, updateUserUsername } from '../../Features/Profile/ActionProfile';


// ajout pour edit username


function FormProfile() {

    const token = useSelector((state) => state.login.token);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    // le state est a username
    const [updateUsername, setUpdateUsername] = useState(user.username);

    // permet de cibler et changer la valeur du username
    const editUserName = (e) => {
        setUpdateUsername(e.target.value);
    };

    //a l'envoie du formulaire 
    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = dispatch(updateUserUsername(updateUsername));
            dispatch(findProfileInfo(token));
            console.log('Username update :', response);
        } catch (error) {
            console.error('Error edit username:', error);
        }
    };

    // permet de se remettre sur l username de base
    const cancel = () => {
        setUpdateUsername(user.username);
    };

    return (
        <div>
            <h1 className='greeting'>Edit user info</h1>
            <form onSubmit={submit}>
                <div className='edit-info'>
                    <label className='labelProfile'>User Name :</label>
                    <input
                        className='inputProfile'
                        type='text'
                        value={updateUsername}
                        onChange={editUserName}
                        required
                    />
                </div>
                <div className='edit-info'>
                    <label className='labelProfile'>First Name :</label>
                    <input
                        className='inputProfile'
                        type='text'
                        value={user.firstname}
                        // disabled désactive le champ du formulaire
                        disabled
                    />
                </div>
                <div className='edit-info'>
                    <label className='labelProfile'>Last Name :</label>
                    <input
                        className='inputProfile'
                        type='text'
                        value={user.lastname}
                        disabled
                    />
                </div>
                <div className='edit-all-buttons'>
                    <button className='edit-button' type='submit'>
                        Save
                    </button>
                    <button
                        className='edit-button'
                        type='button'
                        onClick={cancel} >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormProfile