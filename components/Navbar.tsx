import React from 'react'
import { Brand } from './icons'
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'


export default function Navbar() {
    return (
        <div className='px-8 max-lg:px-6 py-4 flex justify-between items-center bg-card'>
            <Brand className='w-10 h-10 fill-primary' />
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}
