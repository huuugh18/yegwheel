import React, { useState } from 'react';

import { Card, CardContent, CardActions, Button } from '@material-ui/core';

import CourseForm from './CourseForm'

export const CourseCard = ({header,price,description}) => {
    const [dialogOpen, setDialog] = useState(false)
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
                <Button size='medium' variant='contained' color='primary' fullWidth onClick={() => setDialog(true)}>
                    Sign Up
                </Button>
            </CardActions>
            <CourseForm description={description} dialogOpen={dialogOpen} setDialog={setDialog} />
        </Card>
    )
}

export default CourseCard; 