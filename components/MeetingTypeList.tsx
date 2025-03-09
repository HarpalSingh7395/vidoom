'use client'
import MeetingCard from './MeetingCard'
import { useState } from 'react'
import { MeetingDialog } from './MeetingDialog';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { CalendarHeart, Link, Plus, Video } from 'lucide-react';
import { useRouter } from 'next/navigation';


export default function MeetingTypeList() {
    const [meetingType, setMeetingType] = useState<'newMeeting' | 'scheduleMeeting' | 'viewRecordings' | 'joinMeeting'>();
    const [callDetails, setCallDetails] = useState<Call>();
    const router = useRouter();
    const { user } = useUser();
    const videoClient = useStreamVideoClient();
    const createMeeting = () => {
        if(!user || !videoClient) return;
        try {
            const id = crypto.randomUUID();
            const call = videoClient.call('default', id);
            if(!call) throw new Error("Unable to create a new meeting.");

            call.getOrCreate({
                members_limit: 5,
                data: {
                    starts_at: new Date().toISOString(),
                }
            })
            setCallDetails(call)
            router.push(`/meeting/${call.id}`)
        } catch (error) {
            console.log(error)
        }
    }
    return (<>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10'>
            <MeetingCard icon={<Plus />} title='Start Meeting' description='Start an instant meeting' type='new-meeting' className='bg-orange-600' onClick={() => setMeetingType('newMeeting')} />
            <MeetingCard icon={<CalendarHeart />} title='Schedule Meeting' description='Plan your meeting' type='new-meeting' className='bg-blue-600' onClick={() => setMeetingType('scheduleMeeting')} />
            <MeetingCard icon={<Video />} title='View Recordings' description='Checkout your recordings' type='new-meeting' className='bg-purple-600' onClick={() => setMeetingType('viewRecordings')} />
            <MeetingCard icon={<Link />} title='Join Meeting' description='via invitation link' type='new-meeting' className='bg-yellow-600' onClick={() => setMeetingType('joinMeeting')} />
        </div>
        <MeetingDialog 
        isOpen={meetingType == 'newMeeting'}
        onClose={() => setMeetingType(undefined)}
        title='Start Meeting'
        onActionClick={createMeeting}
        />
    </>
    )
}
