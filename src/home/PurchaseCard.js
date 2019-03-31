import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, CardMedia} from '@material-ui/core';
import PurchaseForm from './PurchaseForm'

const MyCard = ({children})=> <Card className='purchase-card home-display-card'>{children}</Card>
const MyHeader = ({header}) => <div className='purchase-card-header home-container-header'> {header} </div>
const Price = ({price}) => <div className='purchase-card-price home-container-price'> ${price}</div>
const Description = ({description}) => <div className='purchase-card-descrip home-container-descrip'>
  <ol>
    {description.map((text,i) => <li key={i}>{text}</li>)}
  </ol>
</div>

const AddButton = ({onClick}) => <Button size='medium' variant='contained' color='primary' fullWidth onClick={onClick}>Add To Cart</Button>

export const PurchaseCard = ({productCode, name, price, description, img}) => {
  const [dialogOpen, setDialog] = useState(false)
  const onAddClick = () => {
    setDialog(true) 
  }
  return (
    <MyCard>
      <MyHeader header={name} />
      <CardContent>
        <Price price={price} />
        <CardMedia image={img} title={name} className='purchase-card-img' />
        <Description description={description}/>
      </CardContent>
      <CardActions>
        <AddButton onClick={onAddClick}/>
      </CardActions>
      <PurchaseForm  productCode={productCode} dialogOpen={dialogOpen} setDialog={setDialog} />
    </MyCard>
  )
}

export default PurchaseCard; 