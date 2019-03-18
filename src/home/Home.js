import React from 'react';
import './Home.css'
import trythis from '../graphics/Montage.png'
import KS18XLCard from '../components/productcards/KS18XLCard'
import KS16SCard from '../components/productcards/KS16SCard'
import KS14DCard from '../components/productcards/KS14DCard'
import AboutSection from '../components/aboutcards/AboutSection'
import VideoSection from '../components/videocards/VideoSection'

const FeatureImage = () => <img id="home-title-image" src={trythis} alt="two people riding electric wheel in front of bridge" style={{width:1366,height:768}}/>

export const Home = () => <div className="home-container">
  <FeatureImage />
  <VideoSection />
  <div id="home-purchase-container" style={{backgroundColor:'white', display:'flex', margin:20, justifyContent:'space-evenly'}}>
    <KS14DCard />
    <KS16SCard />
    <KS18XLCard />
  </div>
  <AboutSection />
</div>

export default Home;
