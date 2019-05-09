import React from 'react'

import {HomeSectionContent}  from '../shared/shared'
import ItemCard  from '../home/ItemCard'
import wheel14 from '../graphics/ks14d.png'
import wheel16 from '../graphics/ks16s.png'
import wheel18 from '../graphics/ks18xl.png'

const Shop = () => <HomeSectionContent id="home-purchase-container">
  <ItemCard productCode='blgmp' img={wheel14} />
  <ItemCard productCode='blgmt' img={wheel16} />
  <ItemCard productCode='blgmu' img={wheel18} />
</HomeSectionContent>

export default () => <Shop />