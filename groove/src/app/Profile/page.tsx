import React from 'react'
import Profile from './Profile'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='container mx-auto w-full align-middle items-start  overflow-scroll custom-scrollbar flex flex-col gap-2  m-5 p-3'>
        <Profile />
    </div>
  )
}

export default page