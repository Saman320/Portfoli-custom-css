import React from "react";
import Image from "next/image";
import Link from "next/link";
import '../style/about.css'; // Import your custom CSS

const About = () => {
    return (
        <div id="About" className="about-container">
            <section className="about-section">
                <div className="about-content">
                    <div className="profile-image-container">
                        <Image
                            className="profile-image"
                            alt="Profile Picture"
                            width={500}
                            height={500}
                            src='/assets/Picture/profile.PNG'
                        />
                    </div>
                    <div className="about-text">
                        <h1 className="about-title">More About Me</h1>
                        <p className="about-description">
                            Aspiring full-stack web developer with a solid foundation in web development technologies and a year of
                            dedicated learning experience. With a Bachelor degree in Commerce, I bring a unique blend of business
                            acumen and technical curiosity to my pursuits.
                        </p>
                        <p className="about-description">
                            In addition to my focus on web development, I have delved into the realm of YouTube SEO optimization,
                            leveraging my analytical skills to enhance the discoverability of digital content. Furthermore, my
                            proficiency in Canva designing adds a creative dimension to my skill set, allowing me to craft visually
                            compelling digital experiences.
                        </p>
                        <p className="about-description">
                            Driven by a relentless desire to grow and evolve, I am eager to transition from a learner to a hands-on
                            practitioner, ready to tackle real-world challenges and contribute meaningfully to innovative projects.
                        </p>
                        <div className="cv-button-container">
                            <Link href="/assets/cv.pdf">
                                <button className="cv-button">
                                    View CV
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
