import './index.css'

function Account({ title, amount, description }) {
    return (
        <section className='account'>
            <div className='account-content-wrapper'>
                <h2 className='account-title'>{title}</h2>
                <p className='account-amount'>{amount}</p>
                <p className='account-amount-description'>{description}</p>
            </div>
            <div className='account-content-wrapper cta'>
                <button className='transaction-button'>View transactions</button>
            </div>
        </section>
    )
}

export default Account