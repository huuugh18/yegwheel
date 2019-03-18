import React from 'react'
import ProductCard from './ProductCard'
import wheel from '../../graphics/wheels/ks18xl.jpg'

const Component = () => <ProductCard title='18" Electric Unicycle KS-18XL' id="ks18xl" className="wheel-img" src={wheel} alt="KS-18XL">
  <ol>
    <li>Model No. KS-18L ( Available color: white, rubber black)</li>
    <li>Advanced Lift-Stop sensor with Telescoping Trolley Handle</li>
    <li>1554wh battery, up to 150km</li>
    <li>2000w motor, up to 50km/h</li>
    <li>Ride 200km to unlock the max speed</li>
    <li>Dual charging ports</li>
    <li>Support USB plug and play</li>
    <li>Front illuminating and rear braking LED lights</li>
    <li>BT for music</li>
  </ol>
</ProductCard>

export default Component
