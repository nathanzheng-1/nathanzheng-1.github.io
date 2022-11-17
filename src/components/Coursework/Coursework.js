import React from 'react'
import './Coursework.css'


export default function Coursework() {
    return (
        <>
            <h2 className='title'>
                Coursework
            </h2>
            <div className='allcourses'>

                <div>

                    <ul>
                        <li><div className='year'>2022</div>
                            <ul>
                                <li>Fall
                                    <ul>
                                        <li>CS 4740: Natural Language Processing</li>
                                        <li>ECON 3801: Game Theory</li>
                                        <li>ECON 3110: Probability Models</li>
                                        <li>HADM 2250: Finance</li>
                                        <li>ENGRC 3025: Communicating Digital Identity</li>
                                    </ul>
                                </li>
                                <li>Spring
                                    <ul>
                                        <li>CS 4850: Mathematical Foundations for the Information Age</li>
                                        <li>CS 4700: Artificial Intelligence</li>
                                        <li>CS 4701: Artificial Intelligence Practicum</li>
                                        <li>ECON 3030: Intermediate Microeconomics</li>
                                        <li>AEM 1200: Business Management</li>

                                    </ul>
                                </li>
                            </ul>

                        </li>

                        <li><div className='year'>2021</div>
                            <ul>
                                <li>Fall
                                    <ul>
                                        <li>CS 4410: Operating SYstems</li>
                                        <li>CS 2850: Networks</li>
                                        <li>AEM 2210: Financial Accounting</li>
                                        <li>HADM 2410: Marketing Principles</li>
                                    </ul>
                                </li>
                                <li>Spring
                                    <ul>
                                        <li>CS 4820: Analysis of Algorithms</li>
                                        <li>CS 3410: Computer Architecture</li>
                                        <li>CS 4787: Principles of Large Scale Machine Learning</li>
                                        <li>CS 1340: Consequences in Computing</li>
                                    </ul>
                                </li>

                            </ul>
                        </li>
                    </ul>
                </div>
                <div >
                    <ul>
                        <li><div className='year'>2020</div>
                            <ul>
                                <li>Fall
                                    <ul>
                                        <li>CS 4780: Machine Learning</li>
                                        <li>CS 3110: Functional Programming</li>
                                        <li>MATH 2930: Differential Equations</li>
                                        <li>ECON 1110: Intro Microeconomics</li>
                                    </ul>
                                </li>
                                <li>Spring
                                    <ul>
                                        <li>CS 2800: Discrete Structures</li>
                                        <li>MATH 2940: Linear Algebra</li>
                                        <li>ECE 1210: Computing Technology in Smartphones</li>
                                        <li>ENGL 1170: Freshman Writing Seminar: Short Stories</li>
                                    </ul>
                                </li>

                            </ul>
                        </li>

                        <li><div className='year'>2019</div>
                            <ul>
                                <li>Fall</li>
                                <ul>
                                    <li>CS 2110: Objected Oriented Programming</li>
                                    <li>MATH 1920: Multivariable Calculus</li>
                                    <li>CHEM 2090: Engineering Chemsitry</li>
                                    <li>COML 1125: Freshman Writing Seminar: Stories of Empires</li>
                                </ul>

                            </ul>
                        </li>
                    </ul>
                </div>
            </div></>)
}
