import React from 'react';

import Typography from '@material-ui/core/Typography'
import './Home.css'
import './DisplayCard.css'
import wheel14 from '../graphics/ks14d.png'
import wheel16 from '../graphics/ks16s.png'
import wheel18 from '../graphics/ks18xl.png'
import largeBanner from '../graphics/Montage.png'
import mobileBanner from '../graphics/IntoTheLight01.jpg'
import LearnCard from './LearnCard'
import PurchaseCard from './PurchaseCard'
import { introDescription, beginnerDescription, advancedDescription } from './learnDescriptions';
import {ks14dDescription, ks16sDescription, ks18xlDescription} from './purchaseDescriptions'

export const Home = () => {
    return (
        <div className="home-container">
            <img id="home-title-image-large" className={'home-title-image'} src={largeBanner} alt="four images of people riding electric unicycles in various locations" />
            <img id="home-title-image-mobile" className={'home-title-image'} src={mobileBanner} alt="two people riding electric wheel in front of bridge" />
            <div id='home-learn-title' className='home-section-header'> Yegwheel Courses </div>
            <div id="home-learn-container" className={'home-section-content'}>
                <LearnCard header='Discover E-Unicycling' price='10' description={introDescription} />
                <LearnCard header='Beginner Skills' price='50' description={beginnerDescription} />
                <LearnCard header='Advanced Skills' price='50' description={advancedDescription} />
            </div>
            <div id='home-purchase-title' className='home-section-header'> Purchase a Wheel </div>
            <div id="home-purchase-container" className={'home-section-content'}>
                <PurchaseCard header={'14" Electric Unicycle KS-14D'} price={'1345'} description={ks14dDescription} img={wheel14} />
                <PurchaseCard header={'16" Electric Unicycle KS-16S'} price={'1745'} description={ks16sDescription} img={wheel16} />
                <PurchaseCard header={'18" Electric Unicycle KS-18XL'} price={'2645'} description={ks18xlDescription} img={wheel18} />
            </div>
            <div id="home-about-container">
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
                        id='home-about-us-content'
                        className='home-about-content' 
                        variant='h6' 
                        color='textSecondary'
                        paragraph
                    >
                        We're all about Electric Unicyling in Edmonton. <br/>
                        We meet once a week or two to chat about things and work on skills.<br/>
                        We do demos for anyone new who is interested in learning and usually finish up with a short trip somewhere around the city on our wheels.<br/>
                        Check out some of our trips below.
                        
                    </Typography>
                </div>
                <div className="home-about-container" id="home-schedule">
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
                    <Typography
                        id='home-schedule-content' 
                        className='home-about-content'
                        variant='h6'
                        color="textSecondary" 
                        paragraph
                    >
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

export default Home;
