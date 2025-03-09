import { CallControls, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'

type CallLayout = 'grid' | 'speaker-left' | 'speaker-right';

export default function MeetingRoom() {

    const [layout, setLayout] = useState<CallLayout>('speaker-left');

    const CallLayout = () => {
        switch (layout) {
            case 'grid':
                return <PaginatedGridLayout />
            case 'speaker-left':
                return <SpeakerLayout
                    participantsBarPosition={'left'}
                />
            default:
                return <SpeakerLayout
                    participantsBarPosition={'right'}
                />
        }
    }
    return (
        <div className='relative h-screen w-full overflow-hidden text-white'>
            <div className='size-full flex justify-center items-center'>
                <CallLayout />
            </div>
        </div>
    )
}
