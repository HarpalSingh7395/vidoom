import { Loader } from 'lucide-react'
import React from 'react'

export default function Spinner() {
  return (
    <div className='size-full flex justify-center items-center'>
      <Loader className='animate-spin' />
    </div>
  )
}
