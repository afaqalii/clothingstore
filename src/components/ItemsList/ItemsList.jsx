import React from 'react'
import { storeData } from '../../Data'
import Item from '../Item/Item'
import "./style.css"

const ItemsList = () => {
  return (
    <div className='container pt-[80px]'>
        <h1 className='text-[50px] pb-10 capitalize text-center text-[#000000]'>get up to 50% off</h1>
       <div className='grid-items'>
       { storeData?.map((item) => ( 
          <Item key={item.id} item={item} />
       )) }
       </div>
    </div>
  )
}

export default ItemsList