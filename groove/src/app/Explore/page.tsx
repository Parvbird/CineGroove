import React from 'react'
import Explore from './Explore'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='container mx-auto w-full align-middle items-start  overflow-scroll custom-scrollbar'>
      <Explore />
    </div>
  )
}

export default page