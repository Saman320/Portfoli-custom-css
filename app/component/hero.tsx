"use client"
import React from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import '../style/hero.css';  // Import your custom CSS

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container">
                {/* Image Section */}
                <div className="image-container">
                    <div className="image-wrapper">
                        <Image
                            className="profile-picture"
                            alt="Profile Picture"
                            fill
                            src="/assets/Picture/profile.PNG"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="text-container">
                    <h1 className="title">
                        I am
                        <br className="hidden lg:inline-block" />
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'UI/UX Designer', 'AI Expert'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <div className="divider"></div>
                    <p className="description">
                        I am a web development and AI expert with a passion for creating innovative
                        and user-friendly solutions. With over 5 years of experience in the tech industry,
                        I have had the opportunity to work on various projects that have helped me hone my
                        skills and stay up to date with the latest trends.
                    </p>

                    <div className="button-container">
                        <Link href={"#Contact"}>
                            <button className="contact-button">
                                Contact
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
