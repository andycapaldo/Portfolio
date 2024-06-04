import './ContactInfoCard.css';

const ContactInfoCard = ({ iconUrl, text, link }) => {
return (
        <div className='contact-details-card'>
            <div className='icon'>
                <img src={iconUrl} alt={text} />
            </div>

            <a href={link}><p>{text}</p></a>
        </div>
    )
}

export default ContactInfoCard