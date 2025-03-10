'use client'
import { useGetCalls } from '@/hooks/useGetCalls'
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import { useRouter } from 'next/navigation';
import { CallRecording } from '@stream-io/node-sdk';
import { Call } from '@stream-io/video-react-sdk';
import CallCard from './CallCard';


type CallListProps = {
    type: 'ended' | 'upcoming' | 'recordings'
}
export default function CallList({ type }: CallListProps) {
    const { endedCalls, upcomingCalls, callRecordings, isLoading } = useGetCalls();
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


    useEffect(() => {
        const fetchRecordings = async () => {
            try {
                const callData = await Promise.all(callRecordings.map(meeting => meeting.queryRecordings()))

                const recordings = callData.filter(call => call.recordings.length > 0)
                    .flatMap(call => call.recordings)
                console.log({ recordings })
                setRecordings(recordings)
            } catch (error) {
                console.log(error)
            }
        }

        if (type == "recordings") fetchRecordings();
    }, [type, callRecordings])

    const calls = getCalls();
    const noCallsMessage = getNoCallMessage();

    if (isLoading) return <Spinner />
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4'>
            {calls && calls.length > 0 ? calls.map((call: Call) =>
                <CallCard date={(call as Call).state.startsAt?.toLocaleString()} link={(process.env.NEXT_PUBLIS_APP_URL || window.location.origin) + "/meeting/" + (call as Call).id} type={type} key={(call as Call).id} title={(call as Call).state.custom.name} />
            ) : <p>{noCallsMessage}</p>}
        </div>
    )
}
