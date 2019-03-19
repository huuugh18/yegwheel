import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';


import './Footer.css'


export class Footer extends Component {
    render(){
        return (
            <div id="home-footer">
                <Typography variant='h5' id="footer-links" color="textSecondary">
                    <a className="footer-link" href="https://www.facebook.com/yegwheel/" target="_blank" rel="noopener noreferrer">
                         Facebook
                    </a>
                    {'    /    '}
                    <a className="footer-link" href="https://forum.yegwheel.com/" target="_blank" rel="noopener noreferrer">
                         Forum 
                    </a>
                    {'  /  '}
                    <a className="footer-link" href="https://www.youtube.com/channel/UCySSb8xYrmCFEY9yfe9cF6g" target="_blank" rel="noopener noreferrer">
                         Youtube
                    </a>

                </Typography>
                <Typography variant='h6' color="textSecondary" id="footer-copyright">
                    &copy; 2018 yegwheel.com
                </Typography>
            </div>
        )
    }
}

export default Footer;