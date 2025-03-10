import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import { toast } from "sonner"

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
        if(!link) return;
        navigator.clipboard.writeText(link)
        toast("Link has been copied.")
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title || "Not title"}</CardTitle>
                <CardDescription>{date}</CardDescription>
            </CardHeader>
            <CardFooter>
                {type == "upcoming" && <div className='flex justify-end items-center gap-2 w-full'>
                    <Button onClick={onStartMeeting}>
                        Start
                    </Button>
                    <Button className='' variant={'secondary'} onClick={onCopyLink}>
                        Copy Invitation Link
                    </Button>
                </div>}
            </CardFooter>
        </Card>
    )
}
