import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function page() {
    return (<div className='h-screen w-full flex justify-center items-center'>
        <SignUp />
    </div>)
}
