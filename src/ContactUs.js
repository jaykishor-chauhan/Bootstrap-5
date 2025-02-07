/* global bootstrap */
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

function ContactUs() {

    useEffect(() => {
        const infoIcon = document.querySelectorAll('.tt');
        infoIcon.forEach(t => {
            new bootstrap.Tooltip(t);
        });
    }, [])


    return (
        <section className="container-fluid">
            <div className="my-4 text-center">
                <h3 className="display-5">Contact Us</h3>
                <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 mt-3">
                    <label htmlFor="name" className="form-label mb-3">Name</label>
                    <div className="input-group mb-3">
                        <span id='name-icon' className='input-group-text'><i class="bi bi-person"></i></span>
                        <input type="text" placeholder='Enter your name..' id='name' className="form-control" aria-label="Name" aria-describedby="name-icon" />
                        <span className='input-group-text'>
                            <span className="tt" data-bs-placement="bottom" title="Name should match with you document.">
                                <i class="bi bi-question-circle"></i>
                            </span>
                        </span>
                    </div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <div className="input-group mb-3">
                        <span id='email-icon' className="input-group-text"><i class="bi bi-envelope"></i></span>
                        <input type="email" placeholder='Enter your email..' id='email' className="form-control" aria-label="Email" aria-describedby="email-icon" />
                        <span className='input-group-text'>
                            <span className="tt" data-bs-placement="bottom" title="Please provide valide email address.">
                                <i class="bi bi-question-circle"></i>
                            </span>
                        </span>
                    </div>
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea type="text" rows='6' placeholder='Enter your message..' className="form-control mb-3" />
                    <div className="text-center mb-5 mt-4">
                        <button className="btn btn-primary btn-lg">Send Request</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs
