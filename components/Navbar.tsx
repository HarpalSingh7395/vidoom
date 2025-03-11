import React from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import MobileNavbar from './MobileNavbar'
import Image from 'next/image'


export default function Navbar() {
    return (
        <div className='px-8 max-lg:px-6 py-4 flex justify-between items-center bg-card fixed top-0 left-0 w-full z-10'>
            <Image src={"/logo.webp"} alt="Vidoom" height={40} width={40} />
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
