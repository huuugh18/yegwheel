import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import './Home.css'
import wheel from '../graphics/glide3.png'
import trythis from '../graphics/Montage.png'
import videos from './videosList'
import {MUIVideoTile} from '../components/MUIVideoTile'


export class Home extends Component{
    render(){
        return (
            <div className="home-container">
                <img id="home-title-image" src={trythis} alt="two people riding electric wheel in front of bridge" style={{width:1366,height:768}}/>

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
                <div id="home-purchase-container">
                    <div id="purchase-title">
                        <Typography
                            component="h1" 
                            variant="h3" 
                            gutterBottom
                            color="textPrimary" 
                            className="home-header" 
                            id="home-about-schedule-header"
                        >
                            Purchase a Wheel
                        </Typography>
                    </div>
                    <div id="purchase-info">
                        <Typography variant="h6" align="left" color="textSecondary" paragraph>
                                The model available for sale is the inmotion glide 3.<br/>
                                Wheel size is 16" making it a great wheel to get started. <br/>
                                Battery Range is 28-31 miles reaching a top speed of 19 mph.<br/>
                                Has a built in retractable handle, front and rear lights, and side LED lights <br/>
                                For additional info email <a href = "mailto:terry@yegwheel.com"> terry@yegwheel.com</a> <br/>
                        </Typography>
                    </div>
                    <div id="purchase-img">
                        <img id="glide3" className="wheel-img" src={wheel} alt="glide wheel 3 product"/>
                    </div>

                </div>
                <div id="home-about">
                    <div className="home-about-container" id="home-about-us">
                        <Typography 
                            component="h1" 
                            variant="h3" 
                            gutterBottom
                            color="textPrimary" 
                            className="home-header" 
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
                            className="home-header" 
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
                
            </div>
        )
    }
}

export default Home;
