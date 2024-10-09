import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../style/project.css"; // Import the CSS file

const Project = () => {
    return (
        <div id="Project">
            <section className="relative custom-image">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center w-full mb-20">
                        <h1 className="project-title">
                            My Projects
                        </h1>
                        <p className="project-description">
                            I take pride in delivering high-quality, user-focused projects. My recent work showcases
                            a blend of innovation and functionality, tailored to meet client needs in a dynamic digital landscape.
                        </p>
                    </div>
                    <div className="project-grid">
                        {/* Project 1 */}
                        <div className="project-card">
                            <Image
                                alt="CLI Calculator"
                                className="project-image"
                                width={100}
                                height={100}
                                src="/assets/Projects/a5.png"
                            />
                            <div className="project-overlay">
                                <div className="project-overlay-content">
                                    <h2>CLI Calculator</h2>
                                    <p>A simple command line calculator built using TypeScript and inquirer library.</p>
                                    <Link href={"https://github.com/Saman320/Project00_calculator.git"}>
                                        <p>View Project</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="project-card">
                            <Image
                                alt="ATM Machine"
                                className="project-image"
                                width={100}
                                height={100}
                                src="/assets/Projects/a7.jpg"
                            />
                            <div className="project-overlay">
                                <div className="project-overlay-content">
                                    <h2>ATM Machine</h2>
                                    <p>ATM Machine built with TypeScript and powered by the npm inquirer package.</p>
                                    <Link href={"https://github.com/Saman320/Project05_word_counter.git"}>
                                        <p>View Project</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="project-card">
                            <Image
                                alt="Word Counter"
                                className="project-image"
                                width={100}
                                height={100}
                                src="/assets/Projects/a8.jpg"
                            />
                            <div className="project-overlay">
                                <div className="project-overlay-content">
                                    <h2>Word Counter</h2>
                                    <p>A word counter built using Node.js with TypeScript for enhanced type safety.</p>
                                    <Link href={"https://github.com/Saman320/Project05_word_counter.git"}>
                                        <p>View Project</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;
