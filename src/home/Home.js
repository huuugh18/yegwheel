import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import './Home.css'
import banner from '../graphics/home_banner.png'
import banner2 from '../graphics/IntoTheLight02.jpg'
import banner3 from '../graphics/IntoTheLightBanner.svg'
import videos from './videosList'
import {VideoTile} from '../components/VideoTile'


export class Home extends Component{
    constructor(){
        super()
        this.state={
            posts:[],
            pictures:[]
            
        }
    }
    componentDidMount(){
        console.log('compononte mounted')
        let pictures
        fetch('https://randomuser.me/api?results=3')
        .then(results => {
            console.log('RESULTS:',results)
            return results.json();
        }).then(data => {
            console.log('DATA',data.results)
            let genders = data.results.map( user => {
                return user.gender
            })
            return this.setState({pictures:genders})
            // pictures = data.results.map( pic => {
            //     return(
            //         <div key={pic.results}>
            //             <img src={pic.picture.thumbnail} alt="person"/>
            //         </div>
            //     )
            // })
        })
        // this.setState({pictures:pictures});
        // console.log("state", this.state.pictures)
    }

    render(){
        return (
            <div className="home-container">
                <img id="home-title-image" src={banner3} alt="two people riding electric wheel in front of bridge"/>
                <div id="banner-title" >
                    {/* <div id="banner-title-text">
                        yegwheel
                    </div> */}
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
                        {this.state.pictures}
                        {/* <Typography variant="h6" align="left" color="textSecondary" paragraph>
                            Sunday Morning Meetup at Ritchie Arena.<br/>
                            Introduction for new users.<br/>
                            Practice and skill development for current users.<br/>
                            10:45 Departure for road trip around city<br/>
                            <a href="https://goo.gl/maps/4xBd2gERt8P2" target="_blank">7727 98 St NW, Edmonton, AB T6E 5C9</a>
                        </Typography> */}
                        {/* <iframe 
                            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyegwheel%2Fposts%2F333188630742991&width=400&show_text=true&height=168&appId" 
                            className='facebook-post'
                            scrolling="no" frameBorder="0" allowTransparency="true" allow="encrypted-media"
                        />
                        <iframe 
                            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyegwheel%2Fposts%2F333187807409740&width=500" 
                            className='facebook-post'
                            scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"
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
