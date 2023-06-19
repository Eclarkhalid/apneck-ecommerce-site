import React from 'react'
import Prod from './prod'
import { PRODUCTS, PRODUCTS1 } from './products'

const shopitems = () => {
  return <>
  <div className="row">
    {[...PRODUCTS, ...PRODUCTS1].map((product) => (
        <Prod key={product.id} data={product} />
    ))}
  </div>
  </>
}

export default shopitems