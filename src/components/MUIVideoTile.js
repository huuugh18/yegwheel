import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './VideoTile.css'


export const MUIVideoTile = (props) => {
    return (
        <Card className='video-container'>
            <VideoComponent className="video-container-player" source={props.source} title={props.title}/> 
            <CardContent className="video-container-text">
                <Typography gutterBottom variant='h5' component='h2' align='center'>
                    {props.title}
                </Typography>
                <Typography component='p'>
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

const VideoComponent = (props) => {
    return (
        <iframe 
            title={props.title}
            className="video-container-player"
            controls="0"
            src={props.source}
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
        >
        </iframe>
    )
}

export default MUIVideoTile;