import React from 'react'
import { Brand } from './icons'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import MobileNavbar from './MobileNavbar'


export default function Navbar() {
    return (
        <div className='px-8 max-lg:px-6 py-4 flex justify-between items-center bg-card fixed top-0 left-0 w-full z-10'>
            <Brand className='w-10 h-10 fill-primary' />
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <div className='flex items-center gap-4'>
                    <UserButton />
                    <MobileNavbar />
                </div>
            </SignedIn>
        </div>
    )
}
