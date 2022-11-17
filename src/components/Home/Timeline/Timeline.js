import React from 'react'
import $ from 'jquery';
import './Timeline.css';

$(function () {
    var inputs = $('.input');
    var paras = $('.description-flex-container').find('p');
    inputs.click(function () {
        var t = $(this),
            ind = t.index(),
            matchedPara = paras.eq(ind);

        t.add(matchedPara).addClass('active');
        inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
    });
});



export default function Timeline() {
    return (<>

        <div className="flex-parent">
            <div className="input-flex-container">
                <div className="input active">
                    <span data-year={2017} data-info="" />
                </div>
                <div className='input' >
                    <span data-year={'July'} data-info="COSMOS" />
                </div>
                <div className="input">
                    <span data-year={2019} data-info="" />
                </div>
                <div className="input">
                    <span data-year={'Sep.'} data-info="CS @ Cornell" />
                </div>
                <div className="input">
                    <span data-year={'Nov.'} data-info="Ivy Hacks" />
                </div>
                <div className="input">
                    <span data-year={2020} data-info="" />
                </div>
                <div className="input">
                    <span data-year={'Mar.'} data-info="LA Hacks" />
                </div>
                <div className="input">
                    <span data-year={'Aug.'} data-info="Sneaker CNN" />
                </div>
                <div className="input">
                    <span data-year={2021} data-info="" />
                </div>
                <div className="input">
                    <span data-year={'Feb.'} data-info="CS 4780 TA" />
                </div>
                <div className="input">
                    <span data-year={'June'} data-info="Intern @ Chargepoint" />
                </div>
                <div className="input">
                    <span data-year={'Sep'} data-info="NLP Research" />
                </div>
                <div className="input">
                    <span data-year={2022} data-info="" />
                </div>
                <div className="input">
                    <span data-year={'May'} data-info="Intern @ Meta" />
                </div>
            </div>
            <div className="description-flex-container">
                <p className='active'> Click on each time to learn more!</p>
                <p >COSMOS was my first exposure to using CS for real world applications. My group created the Ukulaser, a ukulele that utilized laser "strings" that one could pass
                    their hand through to play notes. More information can be found on my projects section!</p>
                <p ></p>
                <p>The beginning of my education in computer science - I would take many challenging courses that allowed me to explore many different areas in computer science. A list of courses can
                    be found in the coursework section!
                </p>
                <p>My first hackathon - my group created a program that used machine learning to identify the genre of songs based on different features. This project is also included under my projects
                    section!
                </p>
                <p></p>
                <p>My second hackathon and first hackathon winner - our project would use machine learning to identify the moods of participants in a zoom meeting and give feedback to presenters in real
                    time. The project won 2nd place overall at LA Hacks!
                </p>
                <p>My most interesting personal project- I used a convolutional neural network to predict the price of sneakers in order to better inform me of prospective profit that I could make for
                    my sneaker reselling hobby. More information on this project is also on my projects page!
                </p>
                <p></p>
                <p>I was a teaching assistant for Cornell's biggest machine learning course for 3 semesters. My responsibilities included holding office hours and grading student homework and exams.
                    Through this experience, I was also able to deeply enhance my own understanding of the material.
                </p>
                <p>My first official internship - through my experience at Chargepoint, I was able to help create crucial library functions for the company's move to AWS Timestream, as well as create
                    scripts to show that the functions worked. I was also able to learn the basics of version control and the industry standards for software engineering through this experience.
                </p>
                <p>My research experience helped me get a glimpse of academia and cutting edge natural language processing techniques. Through my research, I helped benchmark different state of the art
                    algorithms on a variety of datasets, and also created scripts to standardize datasets.
                </p>
                <p></p>
                <p>My internship at Meta was my most rewarding to date. During my internship, I created multiple projects to upgrade Meta's internal search and streamline experience for internal users.
                    More information can also be found in my experience section!
                </p>
            </div>
        </div>
    </>)
}
