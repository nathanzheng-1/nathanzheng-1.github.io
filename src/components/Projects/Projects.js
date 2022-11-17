import React from 'react'
import './Projects.css'
import CardComponent from '../CardComponent'
import ukulazer from "../../images/ukulazer.jpg";
import sneakers from "../../images/sneakers.jpg";
import zoom from "../../images/zoom.jpg";
import spotify from "../../images/spotify.jpg";


const info = [{
    title: 'Ukulazer',
    description: 'This project was created at the COSMOS program in UC San Diego using C++ and Arduino. The entire instrument was made from scratch, including the PVC frame. When a user runs their hands through a laser, a note will play! With this project, our group was able to win the award of best project in the cluster.',
    image: ukulazer
},
{
    title: 'Sneaker Price Predictor',
    description: 'My program consists of two parts: the first scrapes standardized sneaker pictures and priec data off of StockX for training and testing of the model. The second part is a convolutional neural network based off of Inception ResNet that predicts the price of new sneakers.',
    image: sneakers,
    github: 'https://github.com/nathanzheng-1/sneakerCNN',
},
{
    title: 'Mood for Zoom',
    description: 'Our LA Hacks 2nd Place Winner is a program that analyzes a Zoom call participants\' moods, and gives real time feedback to the meeting host that will update every couple of seconds. Our hope is that this project can give lecturers real time feedback about how they are doing.',
    image: zoom,
    github: 'https://github.com/nathanzheng-1/MoodforZoom',
    devpost: 'https://devpost.com/software/zoom-platinum',
},
]

const info2 = [{
    title: 'Spotify Genre Analyzer',
    description: 'This project uses the k nearest neighbors algorithm to find users that have similar music tastes as the you. Then, it will recommend songs that the similar users are listening to, in order to give you good suggestions on new songs to try. ',
    image: spotify,
    github: 'https://github.com/nathanzheng-1/spotifyanalysis',
    devpost: 'https://devpost.com/software/spotifind-1ixmq6',
},]




export default function Projects() {
    return (
        <div>

            <div className='wrapper'>
                {info.map((info) =>
                    <div className='card'>
                        <CardComponent title={info.title} description={info.description} image={info.image} github={info.github} devpost={info.devpost} />
                    </div>)}
            </div>
            <div className='wrapper'>
                {info2.map((info) =>
                    <div className='card'>
                        <CardComponent title={info.title} description={info.description} image={info.image} github={info.github} devpost={info.devpost} />
                    </div>)}
            </div>
        </div>


    )
}