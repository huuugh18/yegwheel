import React from 'react';
import Typography from '@material-ui/core/Typography'
import './Home.css'
import './DisplayCard.css'
//import largeBanner from '../graphics/Montage.png'
import largeBanner from '../graphics/feature/Walterdale1400x665.jpg'
//import mobileBanner from '../graphics/IntoTheLight01.jpg'
import LearnCard from './LearnCard'
import WelcomeSection from './welcome/WelcomeSection'
import {courses} from './learnDescriptions'
import {HomeSectionContent} from '../shared/shared'

const Subtitle = ({id,children}) => <Typography component="h1" variant="h3" gutterBottom color="textPrimary" className="home-header" id={id} style={{fontWeight:600, fontSize:40}}>{children}</Typography>
const SubContent = ({id,children}) => <Typography  id={id} className='home-about-content'  variant='h6'  color='textSecondary' paragraph>{children}</Typography>

const AboutUsTitle = () =>        <Subtitle id="home-about-main-header">About Us</Subtitle>
const UpcomingEventsTitle = () => <Subtitle id="home-about-schedule-header" >Upcoming Events</Subtitle>

const AboutUsContent = () => <SubContent id='home-about-us-content'>
  We're all about Electric Unicyling in Edmonton. <br/>
  We meet once a week or two to chat about things and work on skills.<br/>
  We do demos for anyone new who is interested in learning and usually finish up with a short trip somewhere around the city on our wheels.<br/>
  Check out some of our trips below.
</SubContent>


const UpcomingEventsBody = () => <SubContent id='home-schedule-content'>
  Sunday Morning Meetup at Ritchie Arena.<br/>
  Introduction for new users.<br/>
  Practice and skill development for current users.<br/>
  10:45 Departure for road trip around city<br/>
  <a href="https://goo.gl/maps/4xBd2gERt8P2" target="_blank" rel="noopener noreferrer">7727 98 St NW, Edmonton, AB T6E 5C9</a>
</SubContent>


const HomeSectionHeader = ({id, children}) => <div id={id} className='home-section-header'>{children}</div>

const LearnItems = () => <HomeSectionContent id="home-learn-container"> {
  courses.map((course, i) => {
    const {title, desc, price} = course
    return <LearnCard key={`c${i}`} header={title} price={price} description={desc} />
  })
}</HomeSectionContent>

const LearnTitle = () => <HomeSectionHeader id='bojrw'> Learn to Ride </HomeSectionHeader>

const HomeTitleImage = ({img, src, alt}) => <img {...{img, src}} alt={alt} className={'home-title-image'} />
const LargeTitleImage = () => <HomeTitleImage id="home-title-image-large" src={largeBanner} alt="four images of people riding electric unicycles in various locations" />
//const MobileTitleImage = () => <HomeTitleImage id="home-title-image-mobile" src={mobileBanner} alt="two people riding electric wheel in front of bridge" />

const MainText = () => <div className='main-text'>LEARN TO RIDE...</div>
const SubText = () => <div className='sub-main-text fade-in'>...an electric unicycle</div>
const Sometext = () => <div className='some-text'><MainText /><hr /><SubText /></div>

const TitleArea = () => <div className='feature'>
  <Sometext />
  <LargeTitleImage />
</div>


const HomeAbout = ({children}) => <div id="home-about-container">{children}</div>
const AboutUs        = ({children}) => <div id="home-about-us">{children}</div>
const UpcomingEvents = ({children}) => <div id="home-schedule">{children}</div>

export const Home = () => <div className="home-container">
  <TitleArea />
  <WelcomeSection />
  <LearnTitle />
  <LearnItems />
  <HomeAbout>
    <AboutUs>
      <AboutUsTitle />
      <AboutUsContent />
    </AboutUs>
    <UpcomingEvents>
      <UpcomingEventsTitle />
      <UpcomingEventsBody />
    </UpcomingEvents>
  </HomeAbout>
{/*
  <MobileTitleImage />      
*/}
</div>

export default Home;
