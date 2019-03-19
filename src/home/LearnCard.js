import React, { Component } from 'react';

import { Card, CardContent, CardActions, Button } from '@material-ui/core';


export const CourseCard = ({header,price,description}) => {
    return (
        <Card className='learn-paper home-display-card'>
            <CardContent>
                <div className='learn-paper-header'> {header}</div>
                <div className='learn-paper-price'> ${price}</div>
                <div className='learn-paper-descrip'>
                    {description}
                </div>
            </CardContent>
            <CardActions>
                <Button size='medium'>Sign Up</Button>
            </CardActions>
        </Card>
    )
}

export default CourseCard; 