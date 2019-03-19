import React, { Component } from 'react';

import { Card, CardContent, CardActions, Button, CardHeader, CardMedia } from '@material-ui/core';

export const PurchaseCard = ({header,price,description,img}) => {
    return (
        <Card className='purchase-card home-display-card'>
            <div className='purchase-card-header'> {header} </div>
            <CardContent>
                <div className='purchase-card-price'> ${price}</div>
                <div className='purchase-card-descrip'>
                    {description}
                </div>
                {/* <img id="glide3" className="purchase-card-img" src={img} alt="glide wheel 3 product"/> */}

            </CardContent>
            <CardMedia 
                image={img}
                title='Glide 3'
                className='purchase-card-img'
            />
            <CardActions>
                <Button size='medium'>Buy</Button>
            </CardActions>
        </Card>
    )
}


export default PurchaseCard; 