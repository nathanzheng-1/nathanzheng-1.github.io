import React from 'react'
import './Internships.css'
import CardComponent from '../CardComponent'
import meta from "../../images/meta.jpg";
import chargepoint from "../../images/chargepoint.jpg";


const info = [{
    title: 'Meta Platforms',
    skills: 'JavaScript, React, GraphQL, Hack',
    description: 'At Meta, I completed multiple full stack projects to upgrade Meta\'s internal search. This included an "instant answer" module that contained quicky accessible information, a new home page for internal search, and upgrading the internal search\'s typeahead to include Meta tools, commits, and employees.',
    image: meta
},
{
    title: 'Chargepoint, Inc.',
    skills: 'Python, Excel, AWS Timestream',
    description: 'At Chargepoint, my role was split between software engineering and business operations. As a software engineer, I built library functions and ran simulations to assist in the company\'s move to AWS Timestream. I also investigated and wrote reports on the possibility of using machine learning in the company\'s operations.',
    image: chargepoint
},

]

export default function Home() {
    return (<>
        <div className='wrapper'>
            {info.map((info) =>
                <div className='card' key={info.title}>
                    <CardComponent title={info.title} description={info.description} image={info.image} github={info.github} devpost={info.devpost} skills={info.skills} />
                </div>)}
        </div></>)
}