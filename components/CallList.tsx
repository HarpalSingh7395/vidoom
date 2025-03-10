'use client'
import { useGetCalls } from '@/hooks/useGetCalls'
import React, { useState } from 'react'
import Spinner from './Spinner';
import { useRouter } from 'next/navigation';
import { CallRecording } from '@stream-io/node-sdk';
import { Call } from '@stream-io/video-react-sdk';
import CallCard from './CallCard';


type CallListProps = {
    type: 'ended' | 'upcoming' | 'recordings'
}
export default function CallList({ type }: CallListProps) {
    const { endedCalls, upcomingCalls, isLoading } = useGetCalls();
    const [recordings, setRecordings] = useState<CallRecording[]>([]);
    const router = useRouter();


    const getCalls = () => {
        switch (type) {
            case 'ended':
                return endedCalls

            case 'upcoming':
                return upcomingCalls

            default:
                return [];
        }
    }

    const getNoCallMessage = () => {
        switch (type) {
            case 'ended':
                return 'No previous calls';
            case 'upcoming':
                return 'No upcoming calls';
            case 'recordings':
                return 'No recordings';
            default:
                return '';
        }
    }

    const calls = getCalls();
    const noCallsMessage = getNoCallMessage();

    if (isLoading) return <Spinner />
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4'>
            {calls && calls.length > 0 ? calls.map((call: Call | CallRecording) => 
            <CallCard key={(call as Call).id} title={(call as Call).state.custom.description} />
            ):<p>{noCallsMessage}</p>}
        </div>
    )
}
