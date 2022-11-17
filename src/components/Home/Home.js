import React from 'react'
import './Home.css'
import Timeline from './Timeline/Timeline'
import Paper from '@mui/material/Paper';

export default function Home(props) {
    return (

        <div className='bg'>
            <div className='all'>
                <div className='gradient-text'> Hi, I'm Nathan!</div>

                <div className='intro'>Nice to meet you! I'm a senior at Cornell studying computer science and minoring in business.
                    This past summer, I interned at Meta Platforms, where I worked on various projects to upgrade Meta's internal search.
                    I have experience in machine learning and full stack development but am open to learning about other fields in computer
                    science to expand my horizons. Outside of school, my hobbies include basketball, streetwear, and food. Feel free to contact me at
                    nqz2@cornell.edu if you have any questions!
                </div>
                <div>
                    <Paper elevation={2} className='paper' >

                        <div className='timelinetitle'>
                            My Timeline
                        </div>
                        <Timeline />
                    </Paper></div>
            </div></div>)

}