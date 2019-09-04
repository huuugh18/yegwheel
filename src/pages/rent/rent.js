import React from 'react'
import './rent.css';

import {HomeSectionContent}  from '../../shared/shared'

const Container = ({children}) => <div id='bukza'>{children}</div>
const WeRentWheels = () => <div id='bukyx'>We rent wheels!</div>
const Perhaps = () => <div id='bukyz'>
  Perhaps... 
  <ul>
    <li>you'd like to try out a wheel before you make the big commitment of buying one.</li>
    <li>you'd like to learn on one of our wheels to help you decide what kind of wheel you will need long term.</li>
    <li>you're coming from out of town and you need a wheel while you are in our fair city.</li>
 </ul>
</div>
const WeCanHelp = () => <div id='bukzh'>By the day or week!</div>
const ByTheDayOrWeek = () => <div id='bukzi'>
  If you are practicing with us or riding with us for the day, try any and all of our wheels for one flat $20 rate. <br />
  You can also rent one of our wheels by the day or week.
  Regular wheels (KS-14D, KS-16S) are $30/day, premium wheels (KS-18XL) are $50/day.
</div>

const ContactUs = () => <div id='bulaq'>Contact us for details.</div>

const Rent = () => <HomeSectionContent id="rental-container">
  <Container>
    <WeRentWheels />
    <Perhaps />
    <WeCanHelp />
    <ByTheDayOrWeek />
    <ContactUs />
  </Container>
</HomeSectionContent>

export default () => <Rent />