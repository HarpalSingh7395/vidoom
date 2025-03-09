'use client'
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type MeetingCardProps = {
    icon: ReactNode,
    title: string;
    description: string;
    type: string;
    onClick?: (type: string) => void;
    className?: string;
}

const MeetingCard = ({ description, icon, onClick, title, type, className }: MeetingCardProps) => {
    return <div className={cn('rounded-lg p-4 text-white w-full md:max-w-[270px] min-h-[230px] cursor-pointer flex flex-col justify-between', className)} onClick={() => onClick?.(type)}>
        <div className='rounded-md p-2 bg-white/30 w-max'>
            {icon}
        </div>
        <div>
            <p className='text-xl font-bold'>{title}</p>
            <p>{description}</p>
        </div>
    </div>
}

export default MeetingCard