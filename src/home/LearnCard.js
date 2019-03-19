import React, { } from 'react';

import { Card, CardContent, CardActions, Button } from '@material-ui/core';


export const CourseCard = ({header,price,description}) => {
    return (
        <Card className='learn-paper home-display-card'>
            <CardContent>
                <div className='learn-paper-header home-container-header'> {header}</div>
                <div className='learn-paper-price home-container-price'> ${price}</div>
                <div className='learn-paper-descrip home-container-descrip'>
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