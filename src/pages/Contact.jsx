import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {contact} from "../services/apis";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function Contact(props) {
  const [isMessage, setIsMessage] = useState(false);
  const [messageType, setMessageType] = useState("success");
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    console.log(event.target.name);
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    console.log(inputs);

    event.preventDefault();
    contact(inputs).then((data) => {
     
        setIsLoading(false);
        setIsMessage(true);
        setMessageType("success");
    });
  };

  const [animationParent] = useAutoAnimate();

  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Header />

      <div className="contact__page" data-aos="zoom-in" data-aos-duration="100">
        <h1 className="text-gradient">Contact Us</h1>
        <p>
        Get in Touch with Us and Let's Make Your Dreams a Reality!
        </p>

        {isLoading && <div className="loader"></div>}

        <form action="" onSubmit={handleSubmit} className="flex flex-col">
          {isMessage && (
            <div
              className={` ${messageType == "success" ? "success" : "failure"}`}
            >
              {messageType == "success"
                ? `Thank you for contacting us! Your message has been successfully 
                            received and we will get back to you as soon as possible. Have a great day!`
                : `Something went wrong. Please try again.`}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              aria-label="Name"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              aria-label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              cols="30"
              rows="5"
              placeholder="Message"
              data-gramm="false"
              data-gramm_editor="false"
              data-enable-grammarly="false"
              required
              onChange={handleChange}
            />
          </div>
          <input
            aria-label="ContactUs"
            type="submit"
            value="Submit"
            className="submit_contact--us"
          />
        </form>
      </div>

      <div ref={animationParent} className='chat-container'>

            {isChatOpen &&
                <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/43dc714d-6bc9-4601-88ce-6dc183ed7e72">
                </iframe>
            }
            
             <div className="chat-icon" onClick={()=>setIsChatOpen(!isChatOpen)}>
                <i className='fas fa-comment-dots text-5xl'></i>             
             </div>
        </div>

      <Footer />
    </>
  );
}

export default Contact;
