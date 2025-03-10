import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import React from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function EndCallButton() {
    const call = useCall();

    const { useLocalParticipant } = useCallStateHooks();
    const localParticipant = useLocalParticipant();
    const router = useRouter();

    const isOwner = localParticipant && call?.state.createdBy && localParticipant.userId === call.state.createdBy.id

    const onEndCall = async () => {
        await call?.endCall();
        router.push("/")
    }
    
    if(!isOwner) return null;
    return (
        <Button className='rounded-full' variant={'destructive'} onClick={onEndCall}>End Call for all</Button>
    )
}
