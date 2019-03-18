import React from 'react';
import Typography from '@material-ui/core/Typography';

const Q1 = (props) => <Typography component="h1" variant="h4" gutterBottom color="textPrimary" className="home-header" id="home-about-schedule-header">{props.children}</Typography>
const Q2 = (props) => <Typography variant="h6" align="left" color="textSecondary" paragraph>{props.children}</Typography>

const QQ1 = (props) => <div id="purchase-title"><Q1>{props.children}</Q1></div>
const QQ2 = (props) => <div id="purchase-info"><Q2>{props.children}</Q2></div>
const QQ3 = (props) => <div id="purchase-img"><img id={props.id} className={props.className} src={props.src} alt={props.alt}/></div>

const Component = props => {
  const {id, className,title, children, src, alt} = props
  return <div style={{border: 'beige 8px solid', margin:10, padding:10, flexBasis:1, width: 450}}>
    <QQ1>{title}</QQ1>
    <QQ2>{children}</QQ2>
    <QQ3 id={id} className={className} src={src} alt={alt}/>
  </div>
}

export default Component