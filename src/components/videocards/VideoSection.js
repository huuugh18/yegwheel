import React from 'react';
import {MUIVideoTile} from './MUIVideoTile'
import videos from '../../data/videosList'

const VideoSection = () => <div id="home-video-container">{
  videos.map(vid => <MUIVideoTile 
      key={vid.id} 
      source={vid.source} 
      title={vid.title} 
      description={vid.description}
    />     
  )}
</div>

export default VideoSection