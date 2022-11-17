import React from 'react'
import './Timeline.css';

export default function Timeline() {
    return (<>
        <div className="flex-parent">
            <div className="input-flex-container">
                <input type="radio" name="timeline-dot" data-description={2017} defaultChecked={true} />
                <div className="dot-info" data-description={2017}>
                    <span className="year">2017</span>
                    <span className="label"></span>
                </div>
                <input type="radio" name="timeline-dot" data-description={'July 2017'} />
                <div className="dot-info" data-description={'July 2017'}>
                    <span className="year">July</span>
                    <span className="label">COSMOS</span>
                </div>
                <input
                    type="radio"
                    name="timeline-dot"
                    data-description={2019}

                />
                <div className="dot-info" data-description={2019}>
                    <span className="year">2019</span>
                    <span className="label"></span>
                </div>
                <input type="radio" name="timeline-dot" data-description={'Sep. 2019'} />
                <div className="dot-info" data-description={'Sep. 2019'}>
                    <span className="year">Sep.</span>
                    <span className="label">CS @ Cornell</span>
                </div>
                <input type="radio" name="timeline-dot" data-description={'Nov. 2019'} />
                <div className="dot-info" data-description={'Nov. 2019'}>
                    <span className="year">Nov.</span>
                    <span className="label">Ivy Hacks</span>
                </div>
                <input type="radio" name="timeline-dot" data-description={2020} />
                <div className="dot-info" data-description={2020}>
                    <span className="year">2020</span>
                    <span className="label"></span>
                </div>
                <input type="radio" name="timeline-dot" data-description={'Mar. 2020'} />
                <div className="dot-info" data-description={'Mar. 2020'}>
                    <span className="year">Mar.</span>
                    <span className="label">LA Hacks</span>
                </div>
                <input type="radio" name="timeline-dot" data-description={'Aug. 2020'} />
                <div className="dot-info" data-description={'Aug. 2020'}>
                    <span className="year">Aug.</span>
                    <span className="label">Sneaker CNN</span>
                </div>
                <input type="radio" name="timeline-dot" data-description={2021} />
                <div className="dot-info" data-description={2021}>
                    <span className="year">2021</span>
                    <span className="label"></span>
                </div>
                <input type="radio" name="timeline-dot" data-description={'Feb. 2021'} />
                <div className="dot-info" data-description={'Feb. 2021'}>
                    <span className="year">Feb.</span>
                    <span className="label">CS 4780 TA</span>
                </div>
                <input type="radio" name="timeline-dot" data-description={'June 2021'} />
                <div className="dot-info" data-description={'June 2021'}>
                    <span className="year">June</span>
                    <span className="label">Intern @ Chargepoint</span>
                </div>
                <input type="radio" name="timeline-dot" data-description={'Sep. 2021'} />
                <div className="dot-info" data-description={'Sep. 2021'}>
                    <span className="year">Sep.</span>
                    <span className="label">NLP Research</span>
                </div>
                <input type="radio" name="timeline-dot" data-description={2022} />
                <div className="dot-info" data-description={2022}>
                    <span className="year">2022</span>
                    <span className="label"></span>
                </div>
                <input type="radio" name="timeline-dot" data-description={'May 2022'} />
                <div className="dot-info" data-description={'May 2022'}>
                    <span className="year">May</span>
                    <span className="label">Intern @ Meta</span>
                </div>
                <div id="timeline-descriptions-wrapper">
                    <p data-description={2017}>
                        Click on each circle to learn more!
                    </p>
                    <p data-description={'July 2017'}>
                        COSMOS was my first exposure to using CS for real world applications. My group created the Ukulaser, a ukulele that utilized laser "strings" that one could pass
                        their hand through to play notes. More information can be found on my projects section!
                    </p>
                    <p data-description={2019}></p>
                    <p data-description={'Sep. 2019'}>The beginning of my education in computer science - I would take many challenging courses that allowed me to explore many different areas in computer science. A list of courses can
                        be found in the coursework section!</p>
                    <p data-description={'Nov. 2019'}>My first hackathon - my group created a program that used machine learning to identify the genre of songs based on different features. This project is also included under my projects
                        section!</p>
                    <p data-description={2020}></p>
                    <p data-description={'Mar. 2020'}>My second hackathon and first hackathon winner - our project would use machine learning to identify the moods of participants in a zoom meeting and give feedback to presenters in real
                        time. The project won 2nd place overall at LA Hacks!</p>
                    <p data-description={'Aug. 2020'}>My most interesting personal project- I used a convolutional neural network to predict the price of sneakers in order to better inform me of prospective profit that I could make for
                        my sneaker reselling hobby. More information on this project is also on my projects page!</p>
                    <p data-description={2021}>
                    </p>
                    <p data-description={'Feb. 2021'}>
                        I was a teaching assistant for Cornell's biggest machine learning course for 3 semesters. My responsibilities included holding office hours and grading student homework and exams.
                        Through this experience, I was also able to deeply enhance my own understanding of the material.
                    </p>
                    <p data-description={'June 2021'}>
                        My first official internship - through my experience at Chargepoint, I was able to help create crucial library functions for the company's move to AWS Timestream, as well as create
                        scripts to show that the functions worked. I was also able to learn the basics of version control and the industry standards for software engineering through this experience.
                    </p>
                    <p data-description={'Sep. 2021'}>
                        My research experience helped me get a glimpse of academia and cutting edge natural language processing techniques. Through my research, I helped benchmark different state of the art
                        algorithms on a variety of datasets, and also created scripts to standardize datasets.
                    </p>
                    <p data-description={2022}>

                    </p>
                    <p data-description={'May 2022'}>
                        My internship at Meta was my most rewarding to date. During my internship, I created multiple projects to upgrade Meta's internal search and streamline experience for internal users.
                        More information can also be found in my experience section!
                    </p>
                </div>
            </div>
        </div>

    </>
    )
}
