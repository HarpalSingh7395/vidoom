import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

export default function MeetingSetup({onComplete}: {onComplete: (val: boolean) => void}) {
    const [isMicAndCameraEnabled, setIsMicAndCameraEnabled] = useState<boolean>(false);
    const call = useCall();


    useEffect(() => {
        if(!call) return;
        if(!isMicAndCameraEnabled) {
            call.microphone.enable();
            call.camera.enable();
        }
        else{
            call.microphone.enable();
            call.camera.enable();
        }
    }, [call, isMicAndCameraEnabled])


    const joinMeeting = () => {
        if(!call) return;
        call.join();
        onComplete(true);
    }
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-4 text-white'>
        <h1 className='text-2xl font-bold'>Setup</h1>
        <VideoPreview />
        <DeviceSettings />
        <Button onClick={joinMeeting}>Join Meeting</Button>
    </div>
  )
}
