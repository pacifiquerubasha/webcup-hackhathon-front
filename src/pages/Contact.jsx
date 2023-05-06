import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Contact(props) {

    const [isMessage, setIsMessage] = useState(false);
    const [messageType, setMessageType] = useState("success");
    const [isLoading, setIsLoading] = useState(false);

    const handleContactUs = (e)=>{
        e.preventDefault();
    }
    return (
        <>

            <Header/>

            <div className='contact__page'>
                <h1 className='text-gradient'>Contact Us</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt at accusamus cupiditate cumque exercitationem, animi doloremque itaque harum sit?</p>
               
                {isLoading && <div className="loader"></div>}

                <form action="" onSubmit={handleContactUs} className='flex flex-col'>
                    {isMessage && <div className={` ${messageType == "success" ? "success" : "failure"}`}>

                        {messageType == "success" ? 

                            `Thank you for contacting us! Your message has been successfully 
                            received and we will get back to you as soon as possible. Have a great day!`:

                            `Something went wrong. Please try again.`
                        }
                        
                        
                    </div>}
                    
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input aria-label='Name' type='text' id='name' name='name' placeholder='Name' required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input aria-label='Email' type='email' id='email' name='email' placeholder='Email' required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message'>Message</label>
                        <textarea id='message' name='message' cols="30" rows="5" placeholder='Message'
                        data-gramm="false"
                        data-gramm_editor="false"
                        data-enable-grammarly="false"
                        required/>

                    </div>
                    <input aria-label='ContactUs' type="submit" value="Submit" className='submit_contact--us' />
                </form>
            </div>

            <Footer/>
            
        </>
    );
}

export default Contact;