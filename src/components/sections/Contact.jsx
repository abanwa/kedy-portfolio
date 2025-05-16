import RevealOnScroll from "../RevealOnScroll";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const initialFormData = {
      name: "",
      email: "",
      message: ""
    };
function Contact() {
    const [formData, setFormData] = useState(initialFormData)
    const [isSending, setIsSending] = useState(false);
  // My Emailjs Service ID for Abanwachinaza@gmail.com service_e2ujgi9

  function handleSubmit(e){
    e.preventDefault();
    // const form = useRef();
     // const form = useRef(null);
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID_OC;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID_OC;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY_OC;
    
    // try {
    // setIsSending(true);
    //   await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
    //   alert("Message Sent!");
    // } catch(err){
    //   console.log("ERROR : ", err);
    //   alert("Oops! Something went wrong. Please try again.")
    // } finally {
    // setIsSending(false);
    //}
    
    //  await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
    setIsSending(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(result =>{
      alert("Message Sent!");
      setFormData(initialFormData);
      setIsSending(false);
    }).catch(err => {
      console.log("ERROR : ", err);
      setIsSending(false);
      alert("Oops! Something went wrong. Please try again.")
    })
    
  }
  
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-90 sm:w-130 md:150 mx-auto">
        {/* <div className="max-w-3xl mx-auto px-4"> */}
        {/* <div className="max-w-7xl mx-auto px-4"> */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          {/* <form  className="space-y-6" ref={form} onSubmit={sendEmail}> */}
          <form onSubmit={handleSubmit} className="space-y-6 text-center" >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name" value={formData?.name} onChange={e => setFormData({...formData, name: e.target.value})}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email" value={formData?.email}  onChange={e => setFormData({...formData, email: e.target.value})}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5} value={formData?.message}  onChange={e => setFormData({...formData, message: e.target.value})}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
              />
            </div>
            <button
              type="submit" disabled={isSending}
              className="w-full bg-blue-500 text-white py-1 px-3 sm:py-3 sm:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130,246,0.4)]"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Contact;
