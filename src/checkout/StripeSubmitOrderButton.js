import React from 'react'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles';

import {injectStripe} from 'react-stripe-elements'
import {Button} from '@material-ui/core'


const styles = theme => ({
    button: {
      marginTop: '24px',
      marginLeft: '8px',
    },
});
  

const StripeSubmitButton = ({submitOrder,classes}) => {
    console.log(submitOrder)
    return <Button className={classes.button} color='primary' variant='contained' disabled={false} onClick={submitOrder}> Order </Button>
}

const mapDispatch = (dispatch,{stripe,token,total}) => {
    return {
        submitOrder: async function () {
            console.log(token,stripe)
            
            if(!token || !total) {
                console.log('error, no token or total provided')
                return 
            }
            //https://stripe.com/docs/recipes/elements-react - handle server charge call
            let response = await fetch("https://yegwheel2019as.azurewebsites.net/api/purchase", {
                method: "POST",
                headers: {"Content-Type": "text/plain"},
                body: {token,total}
            });
            response.ok ?  dispatch({type:'SET_ORDER_COMPLETE'}) : dispatch({type:'SET_ORDER_ERROR',payload:{error:response.error}})

        }
    }
}

export default injectStripe(connect(null,mapDispatch)(withStyles(styles)(StripeSubmitButton)))