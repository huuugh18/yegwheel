import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ForumIcon from '@material-ui/icons/Forum';
import SvgIcon from '@material-ui/core/SvgIcon';

import './Footer.css'


const FooterLink = (props) =>  <a className="footer-link" {...props} target="_blank" rel="noopener noreferrer">
  {props.children}
</a>
const FacebookLink = () => <FooterLink href="https://www.facebook.com/yegwheel/"><FacebookIcon style={{fontSize:40}}/>Facebook</FooterLink>
const YoutubeLink = () => <FooterLink href="https://www.youtube.com/channel/UCySSb8xYrmCFEY9yfe9cF6g"><YoutubeIcon style={{fontSize:40}} />YouTube</FooterLink>

const FooterLinks = props => <Typography variant='h5' id="footer-links" color="textSecondary">{props.children}</Typography>

const Copyright = () => <div>&copy; 2018 yegwheel electric unicycles</div>
const CopyrightContainer = (props) => <div id="footer-copyright">{props.children}</div>

function FacebookIcon(props) {
  return (
    <SvgIcon {...props}>
       <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
    </SvgIcon>
  );
}

function YoutubeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
    </SvgIcon>
  );
}


export class Footer extends Component {
  render(){
    return (
      <div id="home-footer">
        <FooterLinks>
          Follow Us: 
          <FacebookLink />
          <YoutubeLink />
        </FooterLinks>
        <CopyrightContainer><Copyright /></CopyrightContainer>
      </div>
    )
  }
}

export default Footer;