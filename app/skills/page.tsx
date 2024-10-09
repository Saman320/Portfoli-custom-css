import React from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";
import '../style/skills.css';  // Import your custom CSS

const Skills = () => {
    return (
        <div id="Skills">
            <section className="skills-container">
                <div className="skills-title">
                    <h2>Skills</h2>
                    <h1>My Skills</h1>
                </div>
                <div className="skills-grid">
                    <div className="skill-item">
                        <div className="flex items-center">
                            <div className="icon">
                                <AiOutlineCheckSquare />
                            </div>
                            <h2>HTML</h2>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-bar-inner" style={{ width: "100%" }}></div>
                        </div>
                        <p className="skill-percentage">100%</p>
                    </div>

                    <div className="skill-item">
                        <div className="flex items-center">
                            <div className="icon">
                                <AiOutlineCheckSquare />
                            </div>
                            <h2>CSS</h2>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-bar-inner" style={{ width: "95%" }}></div>
                        </div>
                        <p className="skill-percentage">95%</p>
                    </div>

                    <div className="skill-item">
                        <div className="flex items-center">
                            <div className="icon">
                                <AiOutlineCheckSquare />
                            </div>
                            <h2>JavaScript/TypeScript</h2>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-bar-inner" style={{ width: "90%" }}></div>
                        </div>
                        <p className="skill-percentage">90%</p>
                    </div>

                    <div className="skill-item">
                        <div className="flex items-center">
                            <div className="icon">
                                <AiOutlineCheckSquare />
                            </div>
                            <h2>NEXT JS</h2>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-bar-inner" style={{ width: "70%" }}></div>
                        </div>
                        <p className="skill-percentage">70%</p>
                    </div>

                    <div className="skill-item">
                        <div className="flex items-center">
                            <div className="icon">
                                <AiOutlineCheckSquare />
                            </div>
                            <h2>Graphic Designing (Canva)</h2>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-bar-inner" style={{ width: "90%" }}></div>
                        </div>
                        <p className="skill-percentage">90%</p>
                    </div>

                    <div className="skill-item">
                        <div className="flex items-center">
                            <div className="icon">
                                <AiOutlineCheckSquare />
                            </div>
                            <h2>Wordpress</h2>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-bar-inner" style={{ width: "75%" }}></div>
                        </div>
                        <p className="skill-percentage">75%</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
