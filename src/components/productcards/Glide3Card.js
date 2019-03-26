import React from 'react'
import ProductCard from './ProductCard'
import wheel from '../../graphics/glide3.png'

const Component = () => <ProductCard title='Purchase a Wheel!' id="glide3" className="wheel-img" src={wheel} alt="glide wheel 3 product">
  The model available for sale is the inmotion glide 3.<br/>
  Wheel size is 16" making it a great wheel to get started. <br/>
  Battery Range is 28-31 miles reaching a top speed of 19 mph.<br/>
  Has a built in retractable handle, front and rear lights, and side LED lights <br/>
  For additional info email <a href = "mailto:terry@yegwheel.net"> terry@yegwheel.net</a> <br/>
</ProductCard>

export default Component
