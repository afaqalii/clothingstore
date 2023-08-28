import React from 'react'
import Button from '../../utils/Button'

const OurStory = () => {
    const sisters = "https://lirp.cdn-website.com/md/dmtmpl/f67fc932-23e9-4c99-a08c-01ab694e3064/dms3rep/multi/opt/two_woman_wear_red_and_blue_suits-1920w.jpg"
  return (
    <div className='container flex justify-between items-center'>
        <div className='w-[480px] flex-1'>
            <img className='rounded-[3%] w-full h-full' src={sisters} />
        </div>
        <div className='flex flex-col gap-10 flex-1 pl-[40px]'>
            <h1 className='text-[40px] text-black capitalize'>our story</h1>
            <p className='text-black'>I grew up in a small town, but always dreamed of moving to the big city. Once I moved to New York, there was no looking back. The noise, the bustle, the scents, the fashion. It was everything I had dream about. </p>
            <Button black={true}>
                learn more
            </Button>
        </div>
    </div>
  )
}

export default OurStory