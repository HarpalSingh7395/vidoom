import { CallControls, CallingState, CallParticipantsList, CallStatsButton, PaginatedGridLayout, SpeakerLayout, useCallStateHooks } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'
import { Button, buttonVariants } from './ui/button';
import { LayoutGrid, Users } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import EndCallButton from './EndCallButton';
import Spinner from './Spinner';

type CallLayout = 'grid' | 'speaker-left' | 'speaker-right';

export default function MeetingRoom() {
    const searchParams = useSearchParams();
    const isPersonalRoom = !!searchParams.get('personal')
    const [layout, setLayout] = useState<CallLayout>('speaker-left');
    const [isParticipantsVisible, setIsParticipantsVisible] = useState<boolean>(false)

    const { useCallCallingState } = useCallStateHooks();
    const callingState = useCallCallingState();

    if(callingState !== CallingState.JOINED) return <Spinner />

    const CallLayout = () => {
        switch (layout) {
            case 'grid':
                return <PaginatedGridLayout ParticipantViewUI={<CallParticipantsList onClose={() => null} />} />
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
                <div className='flex size-full items-center max-w-[1000px]'>
                    <CallLayout />
                </div>
                <div className={cn('h-[calc(100vh-86px)] hidden ml-2 bg-card p-4 rounded-lg', {
                    'block': isParticipantsVisible
                })}>
                    <CallParticipantsList onClose={() => setIsParticipantsVisible(false)} />
                </div>
                <div className='fixed bottom-0 flex flex-wrap gap-3 items-center'>
                    <CallControls />
                    <DropdownMenu>
                        <DropdownMenuTrigger className={cn(buttonVariants({
                            variant: 'outline',
                            size: 'icon'
                        }), 'rounded-full')}>
                            <LayoutGrid />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Layouts</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setLayout('grid')}>Grid</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setLayout('speaker-left')}>Left</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setLayout('speaker-right')}>Right</DropdownMenuItem>
                        </DropdownMenuContent>
                        <CallStatsButton />
                    </DropdownMenu>
                    <Button size={'icon'} variant={'outline'} className='rounded-full' onClick={() => setIsParticipantsVisible(prev => !prev)}>
                        <Users />
                    </Button>
                    {!isPersonalRoom && <EndCallButton />}
                </div>
            </div>
        </div >
    )
}
