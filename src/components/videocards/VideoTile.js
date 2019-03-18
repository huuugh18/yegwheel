import React from 'react';
import './VideoTile.css'


export const VideoTile = (props) => {
    return (
        <div className={'video-container'}>
            <iframe 
                title={props.id}
                className="video-container-player"
                controls="0"
                width="560" 
                height="315" 
                src={props.source}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                ></iframe>
            <div className={'video-container-header'}>
                {props.title}
            </div>
            <div className={'video-container-description'}>
                {props.description}
            </div>
        </div>
    )
}


export default VideoTile;