'use client'
import Spinner from '@/components/Spinner'
import { useGetCallById } from '@/hooks/useGetCallById'
import { useUser } from '@clerk/nextjs'
import { CallControls, SpeakerLayout, StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import React, { use, useState } from 'react'

export default function Meeting({ params }: { params: { id: string } }) {
    const { id } = use<{ id: string }>(params)
    const { user, isLoaded } = useUser();
    const [isReady, setIsReady] = useState<boolean>(false);

    const { call, isLoading: isLoadingCall } = useGetCallById(id);


    if(!isLoaded || isLoadingCall) return <Spinner />;

    
    return (
        <main className='h-screen w-full'>
            <StreamCall call={call}>
                <StreamTheme>
                    {isReady ?
                        "Ready"
                        :
                        'Not Ready'
                    }
                </StreamTheme>
            </StreamCall>
        </main>
    )
}
