import './ContactMe.css';
import email from "../../assets/email.png";
import gitHub from "../../assets/github.png";
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
return (
        <section id="contact" className='contact-container'>
            <h5>Contact Me</h5>

            <div className='contact-content'>
                <div style={{ flex: 1 }}>
                    <ContactInfoCard 
                    iconUrl={email}
                    text="andrewcapaldo23@gmail.com" />
                    <ContactInfoCard 
                    iconUrl={gitHub}
                    text="https://github.com/andycapaldo"
                    link={'https://github.com/andycapaldo'}/>
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactMe