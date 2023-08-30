import React from 'react'
import Button from '../../utils/Button'

const NewCollection = () => {
    const backgroundImageUrl = "https://lirp.cdn-website.com/md/dmtmpl/f67fc932-23e9-4c99-a08c-01ab694e3064/dms3rep/multi/opt/woman_portrait_mountains_background-2880w.jpg"
    const styling = {
    backgroundImage: `url('${backgroundImageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    }
  return (
    <div style={styling} className='grid content-center'>
        <div className='flex flex-col gap-10 text-center'>
            <h1 className='text-[55px] mb-[-23px] text-white capitalize font-medium'>The New Collection is Here</h1>
            <p className='text-[15px]  text-white capitalize'>See what’s hot for the season</p>
            <Button>discover</Button>
        </div>
    </div>
  )
}

export default NewCollection