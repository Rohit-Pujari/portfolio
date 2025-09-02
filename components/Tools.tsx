import React from 'react'
import InfiniteMenu from './InfiniteMenu'
import { tools } from '@/constants'

function Tools() {
  return (
    <div className='relative rounded-xl w-fit h-fit lg:w-[50vw] lg:h-[50vh]'>
      <InfiniteMenu items={tools} />
    </div>
  )
}

export default Tools