import './index.css'

function Form() {
    return (
        <form>
            <div className='input-wrapper'>
                <label for='username'>Username</label>
                <input type='text' id='username' required />
            </div>
            <div className='input-wrapper'>
                <label for='password'>Password</label>
                <input type='password' id='password' required />
            </div>
            <div className='input-remember'>
                <input type='checkbox' id='remember-me' />
                <label for='remember-me'>Remember me</label>
            </div>
            <button type='submit' className='sign-in-button'>
                Sign In
            </button>
        </form>
    )
}

export default Form