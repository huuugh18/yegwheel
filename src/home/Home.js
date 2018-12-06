import React, { Component } from 'react';
import './Home.css'
import banner from '../graphics/home_banner.png'
import videos from './videosList'
import {VideoTile} from './VideoTile'


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
                <div id="content-container">
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
