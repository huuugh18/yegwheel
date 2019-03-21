import React, { useState } from 'react';

import { Card, CardContent, CardActions, Button, CardMedia, TextField } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

import PurchaseForm from './PurchaseForm'

export const PurchaseCard = ({header,price,description,img}) => {
    const [dialogOpen, setDialog] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setComment] = useState('')
    return (
        <Card className='purchase-card home-display-card'>
            <div className='purchase-card-header home-container-header'> {header} </div>
            <CardContent>
                <div className='purchase-card-price home-container-price'> ${price}</div>
                <CardMedia  image={img} title='Glide 3' className='purchase-card-img' />
                <div className='purchase-card-descrip home-container-descrip'>
                    <ol>
                        {description.map(x => <li key={x}>{x}</li>)}
                    </ol>
                </div>
            </CardContent>
            <CardActions>
                <Button size='medium' variant='contained' color='primary' fullWidth onClick={() => setDialog(true)}>
                    Buy
                </Button>
            </CardActions>
            <PurchaseForm 
                open={dialogOpen}
                setDialog={setDialog}
            />
        </Card>
    )
}


export default PurchaseCard; 