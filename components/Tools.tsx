import React from 'react'
import InfiniteMenu from './InfiniteMenu'
import { tools } from '@/constants'

function Tools() {
  return (
    <div className='h-[40vh] relative rounded-xl'>
        <InfiniteMenu items={tools}  />
    </div>
  )
}

export default Tools