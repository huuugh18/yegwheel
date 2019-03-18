import React from 'react';
import Typography from '@material-ui/core/Typography';

const AboutHeader = props => <Typography  component="h1"  variant="h3"  gutterBottom color="textPrimary"  className="home-header">{props.children}</Typography>
const AboutBody = props => <Typography className="home-about-content" id="home-about-main-content" variant="h6" color="textSecondary" paragraph>{props.children}</Typography>

const Component = props => {
  const {id, header, children} = props
  return <div className="home-about-container" id={id}>
    <AboutHeader>{header}</AboutHeader>
    <AboutBody>{children}</AboutBody>
  </div>
}  

export default Component
