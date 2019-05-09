import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ForumIcon from '@material-ui/icons/Forum';


import './Footer.css'


const FooterLink = (props) =>  <a className="footer-link" {...props} target="_blank" rel="noopener noreferrer">
  {props.children}
</a>
const FacebookLink = () => <FooterLink href="https://www.facebook.com/yegwheel/">Facebook</FooterLink>
const ForumLink = () => <FooterLink href="https://forum.yegwheel.com/">Forum</FooterLink>
const YoutubeLink = () => <FooterLink href="https://www.youtube.com/channel/UCySSb8xYrmCFEY9yfe9cF6g">YouTube</FooterLink>

const FooterLinks = props => <Typography variant='h5' id="footer-links" color="textSecondary">{props.children}</Typography>

const Copyright = () => <div>
  &copy; 2018 yegwheel.com
</div>

const CopyrightContainer = (props) => <div id="footer-copyright">{props.children}</div>

export class Footer extends Component {
  render(){
    return (
      <div id="home-footer">
        <FooterLinks>
          <FacebookLink />
          <div>
            <ForumIcon />
            <ForumLink />
          </div>
          <YoutubeLink />
        </FooterLinks>
        <CopyrightContainer><Copyright /></CopyrightContainer>
      </div>
    )
  }
}

export default Footer;