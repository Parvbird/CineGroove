import React from 'react'

type Props = {}

const Topbar = (props: Props) => {
  return (
    <section className='topbar'>
      <div className="flex-between py-4 px-5">
        <a href="/" className="flex gap-3 items-center rounded-full">
          <img src="/images/parvixome-logo.png" alt="" className="w-6 p-0.5 rounded-full" />
        </a>
        <div className="flex gap-4">
          <button className="">
            <img src="/images/joshua.jpg" alt="" className="w-8 rounded-full" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Topbar