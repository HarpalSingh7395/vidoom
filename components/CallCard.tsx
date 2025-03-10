import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

type CallCardProps = {
    title: string;
    type: 'ended' | 'upcoming' | "recording";
}

export default function CallCard({ title }: CallCardProps) {
  return (
    <Card>
        <CardHeader>
            <CardTitle>{title || "Not title"}</CardTitle>
            <CardDescription>23 March, 10:00AM</CardDescription>
        </CardHeader>
        <CardFooter>
            <div className='flex justify-end items-center gap-2 w-full'>
                <Button>
                    Start
                </Button>
                <Button className='' variant={'secondary'}>
                    Copy Invitation Link
                </Button>
            </div>
        </CardFooter>
    </Card>
  )
}
