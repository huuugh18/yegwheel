import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import './Home.css'
import banner from '../graphics/home_banner.png'
import banner2 from '../graphics/IntoTheLight02.jpg'
import videos from './videosList'
import {VideoTile} from '../components/VideoTile'


export class Home extends Component{
    render(){
        return (
            <div className="home-container">
                <img id="home-title-image" src={banner2} alt="two people riding electric wheel in front of bridge"/>
                <div id="banner-title" >
                    <div id="banner-title-text">
                        yegwheel
                    </div>
                </div>
                <div id="home-about">
                    <div className="home-about-container" id="home-about-main">
                        <Typography 
                            component="h1" 
                            variant="h3" 
                            gutterBottom
                            color="textPrimary" 
                            className="home-about-header" 
                            id="home-about-main-header"
                        >
                            About Us
                        </Typography>
                        <Typography 
                            className="home-about-content" 
                            id="home-about-main-content" 
                            variant="h6" 
                            color="textSecondary" 
                            paragraph
                        >
                            We're all about Electric Unicyling in Edmonton. <br/>
                            We meet once a week or two to chat about things and work on skills.<br/>
                            We do demos for anyone new who is interested in learning and usually finish up with a short trip somewhere around the city on our wheels.<br/>
                            Check out some of our trips below.
                        </Typography>
                    </div>
                    <div className="home-about-container" id="home-about-schedule">
                        <Typography 
                            component="h1" 
                            variant="h3" 
                            gutterBottom
                            color="textPrimary" 
                            className="home-about-header" 
                            id="home-about-schedule-header"
                        >
                            Upcoming Events
                        </Typography>
                        <Typography variant="h6" align="left" color="textSecondary" paragraph>
                            Sunday Morning Meetup at Ritchie Arena.<br/>
                            Introduction for new users.<br/>
                            Practice and skill development for current users.<br/>
                            10:45 Departure for road trip around city<br/>
                            <a href="https://goo.gl/maps/4xBd2gERt8P2" target="_blank">7727 98 St NW, Edmonton, AB T6E 5C9</a>
                        </Typography>
                        {/* <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.4542184049506!2d-113.48464598397383!3d53.51394436984508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0220bab4886a5%3A0x29890ad07081c42d!2s7727+98+St+NW%2C+Edmonton%2C+AB+T6E+5C9!5e0!3m2!1sen!2sca!4v1544381872229" 
                            width="400" 
                            height="300" 
                            frameBorder="0" 
                            style={{border:0}} 
                            allowFullScreen
                        /> */}
                    </div>
                </div>
                <div id="home-video-container">
                    {
                        videos.map(vid => <VideoTile 
                                key={vid.id} 
                                source={vid.source} 
                                title={vid.title} 
                                description={vid.description}
                            />     
                        )
                    }
                </div>
                
            </div>
        )
    }
}

export default Home;
