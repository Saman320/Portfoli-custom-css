import React from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import Link from "next/link";
import "../style/contact.css"; // Import the CSS file

const Contact = () => {
    return (
        <div id="Contact" className="contact-container">
            <section className="container">
                {/* Heading */}
                <div className="contact-header">
                    <h2 className="contact-title">Contact Me</h2>
                    <p className="contact-subtitle">
                        Feel free to reach out for collaborations or just a friendly hello 👋
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="contact-cards">
                    {/* Contact Item 1 */}
                    <div className="contact-card">
                        <div className="card-content">
                            <AiOutlineMail className="icon" />
                            <h3 className="card-title">Email</h3>
                            <Link href="mailto:samansiddiqui320@gmail.com">
                                <p className="card-text">samansiddiqui320@gmail.com</p>
                            </Link>
                        </div>
                    </div>

                    {/* Contact Item 2 */}
                    <div className="contact-card">
                        <div className="card-content">
                            <AiOutlinePhone className="icon" />
                            <h3 className="card-title">Phone</h3>
                            <p className="card-text">+923149261518</p>
                        </div>
                    </div>

                    {/* Contact Item 3 */}
                    <div className="contact-card">
                        <div className="card-content">
                            <AiOutlineEnvironment className="icon" />
                            <h3 className="card-title">Location</h3>
                            <p className="card-text">Karachi Sindh</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-container">
                    <form className="contact-form">
                        <h3 className="form-title">Send me a message</h3>

                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-input"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                className="form-input textarea"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
