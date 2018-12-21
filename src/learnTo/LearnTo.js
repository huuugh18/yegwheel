import React, { Component } from 'react';
import './LearnTo.css'

import learningPic3 from '../graphics/LearnToRideBannerLCitalics.svg'
import videos from './learnToVideoList'
import {VideoTile} from '../components/VideoTile'
import {MUIVideoTile} from './MUIVideoTile'

export class LearnHowTo extends Component{
    render(){
        return(
            <div class="learn-to-container">
                <img id="ltw-header-image" src={learningPic3} alt="two people learning to use a wheel"/>
                <div id="ltw-content-container">
                {
                    videos.map(vid => 
                        <MUIVideoTile
                            key={vid.id} 
                            source={vid.source} 
                            title={vid.title} 
                            description={vid.description}
                        />
                    )

                }
                    {/* {
                         videos.map(vid => <VideoTile 
                                key={vid.id} 
                                source={vid.source} 
                                title={vid.title} 
                                description={vid.description}
                            />     
                        )
                    } */}
                </div>
            </div>
        )
    }
}

export default LearnHowTo;