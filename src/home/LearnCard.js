import React, { } from 'react';

import { Card, CardContent, CardActions, Button } from '@material-ui/core';


export const CourseCard = ({header,price,description}) => {
    return (
        <Card className='learn-card home-display-card'>
            <CardContent>
                <div className='learn-card-header home-container-header'> {header}</div>
                <div className='learn-card-price home-container-price'> ${price}</div>
                <div className='learn-card-descrip home-container-descrip'>
                    {description}
                </div>
            </CardContent>
            <CardActions>
                <Button size='medium' variant='contained' color='primary' fullWidth>
                    Sign Up
                </Button>
            </CardActions>
        </Card>
    )
}

export default CourseCard; 