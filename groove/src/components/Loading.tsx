import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="bg-black rounded-full w-full mx-auto mt-10 flex items-center align-middle justify-center">
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading