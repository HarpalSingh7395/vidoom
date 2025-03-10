import { CallParticipantListing, DeviceSettings, StreamVideoParticipant, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { useUser } from '@clerk/nextjs';
import { Mic, MicOff, Video, VideoOff } from 'lucide-react';

export default function MeetingSetup({ onComplete }: { onComplete: (val: boolean) => void }) {
    const [isMicEnabled, setIsMicEnabled] = useState<boolean>(false);
    const [isCameraEnabled, setIsCameraEnabled] = useState<boolean>(false);
    const { user } = useUser();
    const call = useCall();

    useEffect(() => {
        if (!call) return;
        if (!isMicEnabled) {
            call.microphone.disable();
        }
        else {
            call.microphone.enable();
        }
    }, [call, isMicEnabled])

    useEffect(() => {
        if (!call) return;
        if (!isCameraEnabled) {
            call.camera.disable();
        }
        else {
            call.camera.enable();
        }
    }, [call, isCameraEnabled])


    const joinMeeting = () => {
        if (!call) return;
        call.join();
        onComplete(true);
    }
    return (
        <div className='flex h-screen w-full flex-col items-center justify-center gap-4 text-white'>
            <div className='flex gap-16 w-full max-w-5xl'>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <div className='relative'>
                        <VideoPreview className='w-full flex-1' />
                        <p className='absolute top-4 left-4'>{user?.fullName}</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <Button variant={isMicEnabled?'outline':'destructive'} className='rounded-full' size={'icon'} onClick={() => setIsMicEnabled(!isMicEnabled)}>
                            {isMicEnabled?<Mic />:<MicOff />}
                        </Button>
                        <Button variant={isCameraEnabled?'outline':'destructive'} className='rounded-full' size={'icon'} onClick={() => setIsCameraEnabled(!isCameraEnabled)}>
                            {isCameraEnabled?<Video />:<VideoOff />}
                        </Button>
                        <DeviceSettings />
                    </div>
                </div>
                <div className='flex-1 flex flex-col justify-center items-center gap-4'>
                    <h1 className='text-2xl font-bold'>Ready to join?</h1>
                    <Button onClick={joinMeeting}>Join Meeting</Button>
                </div>
            </div>

        </div>
    )
}
