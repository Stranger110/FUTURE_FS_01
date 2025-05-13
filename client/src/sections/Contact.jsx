import React, { useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import MessageSent from '../components/MessageSent';
import NotSent from '../components/NotSent';
import { toast } from 'react-toastify';

const Contact = () => {

    const [isLoading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
    
      try {
        const response = await fetch('http://localhost:5000/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
    
        const data = await response.json();
    
        if (data.success) {
          toast(<MessageSent />, {
            position: 'top-center',
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setFormData({ name: '', email: '', message: '' });
        } else {
          toast(<NotSent />, {
            position: 'top-center',
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } catch (error) {
        console.error('Submission error:', error);
        toast(<NotSent />, {
          position: 'top-center',
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      setLoading(false);
    };
    

  return (
    <section id='contact' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
            title="Get in Touch with Me"
            sub="✉️Contact"
        />

        <div className='mt-16 grid-12-cols'>
        {/* {Contact Form} */}
            <div className='xl:col-span-5'>
                <div className='flex-center rounded-xl p-10'>
                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7'>
                    <div className='mb-6'>
                        <label htmlFor="name">Name</label>
                        <input className='card-border' 
                        type="text" 
                        id='name'
                        name='name'
                        placeholder='Your name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        />
                    </div>    

                    <div className='mb-6'>
                        <label htmlFor="email">Email</label>
                        <input className='card-border' 
                        type="email" 
                        id='email'
                        name='email'
                        placeholder='Your email address'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                    </div>    

                    <div className='mb-6'>
                        <label htmlFor="message">Message</label>
                        <textarea className='card-border'
                        id='message'
                        name='message'
                        rows="5"
                        placeholder='Your message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        ></textarea>
                    </div>    

                    <div className='flex group'>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full py-4 rounded-md flex justify-center items-center transition-colors duration-300
                        ${isLoading ? 'bg-zinc-400 cursor-not-allowed' : 'bg-white group-hover:bg-zinc-900 text-black'}`}
                    >
                      {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      <span className="text-black">Sending...</span>
                    </>
                   ) : (
                    <span className="group-hover:text-white transition-colors duration-300">Send Message</span>
                  )}
                    </button>

                    </div>
                </form>
                </div>

            </div>
            {/* {Rigth Side} */}
            <div className='xl:col-span-7 w-full px-5 min-h-90'>
              <div className='w-full h-full bg-zinc-800 rounded-3xl overflow-hidden'>
              <img src="../../../public/images/mailbox.png" width={800} className='flex w-full p-6' alt="mailbox" />
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
