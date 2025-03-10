import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import { toast } from "sonner"
import { Calendar, CheckCircle, Copy, Play, Video } from 'lucide-react';

type CallCardProps = {
    title: string;
    date?: string;
    link?: string;
    type: 'ended' | 'upcoming' | "recordings";
}

export default function CallCard({ title, date, link, type }: CallCardProps) {
    const router = useRouter()
    const onStartMeeting = () => {
        if (link) router.push(link);
    }

    const onCopyLink = () => {
        if (!link) return;
        navigator.clipboard.writeText(link)
        toast("Link has been copied.")
    }

    const getIcon = () => {
        switch (type) {
            case 'ended':
                return <CheckCircle className='w-5 h-5' />;

            case 'recordings':
                return <Video className='w-5 h-5' />;

            case 'upcoming':
                return <Calendar className='w-5 h-5' />

            default:
                return <Video className='w-5 h-5' />
        }
    }

    return (
        <Card>
            <CardHeader>
                <div className='flex gap-2 items-center'>{getIcon()}<CardTitle>{title || "Not title"}</CardTitle></div>
                <CardDescription>{date}</CardDescription>
            </CardHeader>
            <CardFooter>
                {(type == "upcoming" || type == "recordings") && <div className='flex justify-end items-center gap-2 w-full'>
                    {type == "upcoming" && <Button size={'sm'} onClick={onStartMeeting}>
                        <Play />Start
                    </Button>}
                    {type == "recordings" && <Button size={'sm'} onClick={onStartMeeting}>
                        <Play />Play
                    </Button>}
                    <Button size={'sm'} className='' variant={'secondary'} onClick={onCopyLink}>
                        <Copy />Copy Invitation Link
                    </Button>
                </div>}
            </CardFooter>
        </Card>
    )
}
