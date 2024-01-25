import './index.css'

function Features({ image, alt, title, text }) {
	return (
		<div className='features-container'>
			<img src={image} alt={alt} className='feature-img' />
			<h2 className='feature-title'>{title}</h2>
			<p className='feature-text'>{text}</p>
		</div>
	)
}

export default Features 