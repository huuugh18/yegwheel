import React, { Component } from 'react';

import { Card, CardContent, CardActions, Button, CardHeader, CardMedia } from '@material-ui/core';
import wheel from '../graphics/glide3.png'


export const PurchaseCard = ({header,price,description,img}) => {
    return (
        <Card className='purchase-card home-display-card'>
            <CardMedia 
                image={img}
                title='Glide 3'
                className='purchase-card-img'
            />
            <CardContent>
                <div className='purchase-card-header'> {header}</div>
                <div className='purchase-card-price'> ${price}</div>
                <div className='purchase-card-descrip'>
                    {description}
                </div>
                {/* <img id="glide3" className="purchase-card-img" src={img} alt="glide wheel 3 product"/> */}

            </CardContent>
            <CardActions>
                <Button size='medium'>Buy</Button>
            </CardActions>
        </Card>
    )
}
// src\graphics\glide3.png
export default PurchaseCard; 