import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import './Home.css'
import banner3 from '../graphics/IntoTheLightBannerNoText.svg'
import videos from './videosList'
import {MUIVideoTile} from '../components/MUIVideoTile'


export class Home extends Component{
    render(){
        return (
            <div className="home-container">
                <img id="home-title-image" src={banner3} alt="two people riding electric wheel in front of bridge"/>
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
                    </div>
                </div>
                <div id="home-video-container">
                    {
                        videos.map(vid => <MUIVideoTile 
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
