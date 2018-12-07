import React, { Component } from 'react';
import './Home.css'
import banner from '../graphics/home_banner.png'
import videos from './videosList'
import {VideoTile} from '../components/VideoTile'


export class Home extends Component{
    render(){
        return (
            <div className="home-container">
                <img id="home-title-image" src={banner} alt="two people riding electric wheel in front of bridge"/>
                <div id="banner-title" >
                    <div id="banner-title-text">
                        yegwheel
                    </div>
                </div>
                <div id="home-about">
                    <div id="home-about-header">
                        About Us
                    </div>
                    <div id="home-about-main">
                        We're all about Electric Unicyling in Edmonton. We meet once a week or two to chat about things and work on skills.
                        We do demos for anyone new who is interested in learning and usually finish up with a short trip somewhere around the city on our wheels.
                        You can check out some videos below
                    </div>
                    <div id="home-about-schedule">
                        Sunday Morning Meetup at Ritchie Arena.
                        Introduction for new users.
                        Practice and skill development for current users.
                        10:45 Departure for road trip around city
                        7727 98 St NW, Edmonton, AB T6E 5C9
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
