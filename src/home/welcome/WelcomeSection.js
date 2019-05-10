import React from 'react'
import './welcomeSection.css'
//import SvgIcon from '@material-ui/core/SvgIcon'
//import DeleteIcon from '@material-ui/icons/Delete';
import AccessAlarmIcon from '@material-ui/icons/LocalLibrary';
import EventIcon from '@material-ui/icons/Event';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HowToRegIcon  from '@material-ui/icons/HowToReg'
import { withStyles } from '@material-ui/core/styles';

const Title = () => <div id='bojsm'>Welcome to Yegwheel</div>
const Body = () => <div id='bojsn'>Yegwheel is Edmonton's first and only training center for electric unicycles. We have been riding since 2016 in this very young sport and have logged thousands of kilometers over different terrain, weather conditions, and with many different types of wheels. Whether you just want to try it out recreationally, or want to use it for commuting every day to work or school, we have the tools and experience to help you get into this awesome, eco-friendly new way to get around.</div>

const styles = theme => ({
  root: {
    color: theme.palette.text.primary,
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 64,
    color:'#6B79B8'
  },
});

const Feature = ({children}) => <div className='bojsp'>{children}</div>

const TrainingFeature = props => <Feature>
  <AccessAlarmIcon className={props.classes.icon}/>Training
</Feature>

const ExcursionsFeature = props => <Feature>
  <EventIcon className={props.classes.icon}/>Excursions
</Feature>

const SalesFeature = (props) => <Feature>
  <ShoppingCartIcon  className={props.classes.icon}/>Sales
</Feature>

const RentalFeature = props =>  <Feature>
  <HowToRegIcon className={props.classes.icon} />Rentals
</Feature>


const Features = (props) => <div id='bojso'>
  <TrainingFeature classes={props.classes} />
  <ExcursionsFeature classes={props.classes} />
  <RentalFeature classes={props.classes} />
  <SalesFeature classes={props.classes} />
</div>

const WelcomeToYegwheel = (props) => <div id='bojrr'>
  <Title />
  <Body />
  <Features classes={props.classes}/>
</div>

export default withStyles(styles)(WelcomeToYegwheel)