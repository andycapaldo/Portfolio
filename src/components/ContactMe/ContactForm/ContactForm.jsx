import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            message: formData.message,
        };

        emailjs.send('service_u5423ia', 'template_tmg0g7g', templateParams, 'qC587reKj7JCFGyUQ')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
            })
            .catch((err) => {
                console.log('FAILED...', err);
                alert('Failed to send the message. Please try again later.');
            });
    };

return (
    <div className='contact-form-content'>
        <form onSubmit={handleSubmit}>
            <div className='name-container'>
                <input type="text" name="firstName" placeholder='First Name' value={formData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder='Last Name' value={formData.lastName} onChange={handleChange} required />
            </div>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" rows={3} value={formData.message} onChange={handleChange} required />

            <button type="submit">SEND</button>
        </form>
    </div>
    )
}

export default ContactForm