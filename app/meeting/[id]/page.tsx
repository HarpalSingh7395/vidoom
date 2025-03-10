'use client'
import MeetingRoom from '@/components/MeetingRoom'
import MeetingSetup from '@/components/MeetingSetup'
import Spinner from '@/components/Spinner'
import { useGetCallById } from '@/hooks/useGetCallById'
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

export default function Meeting() {
    const params = useParams();
    const id = params.id as string;
    const { isLoaded } = useUser();
    const [isReady, setIsReady] = useState<boolean>(false);

    const { call, isLoading: isLoadingCall } = useGetCallById(id);


    if (!isLoaded || isLoadingCall) return <Spinner />;


    return (
        <StreamCall call={call}>
            <StreamTheme>
                {isReady ?
                    <MeetingRoom />
                    :
                    <MeetingSetup onComplete={setIsReady} />
                }
            </StreamTheme>
        </StreamCall>
    )
}
