'use client'
import MeetingCard from './MeetingCard'
import { useState } from 'react'
import { MeetingDialog } from './MeetingDialog';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { CalendarHeart, Link, Plus, Video } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import ScheduleMeetingForm from './ScheduleMeetingForm';
import JoinMeetingForm from './JoinMeetingForm';
import { toast } from "sonner"


export default function MeetingTypeList() {
    const [meetingType, setMeetingType] = useState<'newMeeting' | 'scheduleMeeting' | 'viewRecordings' | 'joinMeeting'>();
    const [callDetails, setCallDetails] = useState<Call>();
    const router = useRouter();
    const { user } = useUser();
    const videoClient = useStreamVideoClient();
    const createMeeting = () => {
        if (!user || !videoClient) return;
        try {
            const id = crypto.randomUUID();
            const call = videoClient.call('default', id);
            if (!call) throw new Error("Unable to create a new meeting.");

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

    const onScheduleMeeting = async (values: {
        name: string; 
        datetime: Date;
    }) => {
        if(!user || !videoClient) return;
        try{
            const id = crypto.randomUUID();
            const call = videoClient.call('default', id)
            if(!call) throw new Error("Unable to create a new meeting.")

                await call.getOrCreate({
                    members_limit: 5,
                    data: {
                        starts_at: values.datetime.toISOString(),
                        custom: {
                            name: values.name
                        }
                    }
                })

            setCallDetails(call)
        }
        catch(error) {
            console.log(error)
        }
    }


    return (<>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10'>
            <MeetingCard icon={<Plus />} title='Start Meeting' description='Start an instant meeting' type='new-meeting' className='bg-orange-600' onClick={() => setMeetingType('newMeeting')} />
            <MeetingCard icon={<CalendarHeart />} title='Schedule Meeting' description='Plan your meeting' type='new-meeting' className='bg-blue-600' onClick={() => setMeetingType('scheduleMeeting')} />
            <MeetingCard icon={<Video />} title='View Recordings' description='Checkout your recordings' type='new-meeting' className='bg-purple-600' onClick={() => router.push("/recordings")} />
            <MeetingCard icon={<Link />} title='Join Meeting' description='via invitation link' type='new-meeting' className='bg-yellow-600' onClick={() => setMeetingType('joinMeeting')} />
        </div>
        <MeetingDialog
            isOpen={meetingType == 'newMeeting'}
            onClose={() => setMeetingType(undefined)}
            title='Start Meeting'
        >
            <Button onClick={createMeeting}>Start Now</Button>
        </MeetingDialog>
        <MeetingDialog
            isOpen={meetingType == 'scheduleMeeting'}
            onClose={() => setMeetingType(undefined)}
            title='Schedule a meeting'
        >
            {callDetails?
            <div className='w-full flex justify-center gap-4'>
                <Button  className='w-full' onClick={() => {
                    router.push(`/meeting/${callDetails.id}`)
                }}>
                    Start
                </Button>
                <Button className='w-full' variant={'outline'} onClick={() => {
                    navigator.clipboard.writeText((process.env.NEXT_PUBLIS_APP_URL || window.location.origin) + "/meeting/" + callDetails.id)
                    toast("Link has been copied.")
                }}>
                    Copy Invitation Link
                </Button>
            </div>
            :<ScheduleMeetingForm onSubmit={onScheduleMeeting} />}
        </MeetingDialog>

        <MeetingDialog
            isOpen={meetingType == 'joinMeeting'}
            onClose={() => setMeetingType(undefined)}
            title='Join a meeting'
        >
            <JoinMeetingForm onSubmit={async (values) => {
                router.push(values.url);
            }} />
        </MeetingDialog>
    </>
    )
}
