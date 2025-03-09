import { StreamClientProvider } from '@/providers/StreamClientProvider'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='h-screen w-full'>
            <StreamClientProvider>
                {children}
            </StreamClientProvider>
        </main>
    )
}
