import React, {  } from 'react';

import { Card, CardContent, CardActions, Button, CardMedia } from '@material-ui/core';

export const PurchaseCard = ({header,price,description,img}) => {
    return (
        <Card className='purchase-card home-display-card'>
            <div className='purchase-card-header home-container-header'> {header} </div>
            <CardContent>
                <div className='purchase-card-price home-container-price'> ${price}</div>
                <div className='purchase-card-descrip home-container-descrip'>
                    <ol>
                        {description.map(x => <li key={x}>{x}</li>)}
                    </ol>
                </div>
            </CardContent>
            <CardMedia  image={img} title='Glide 3' className='purchase-card-img' />
            <CardActions>
                <Button size='medium'>Buy</Button>
            </CardActions>
        </Card>
    )
}


export default PurchaseCard; 