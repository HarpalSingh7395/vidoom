'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export type NavLink = {
    name: string;
    link: string;
    icon: React.ReactNode;
};

export default function NavItem({ item }: { item: NavLink }) {
    const pathname = usePathname();
    const isActive = pathname.endsWith(item.link)
    return (<Link href={item.link} className={cn('flex gap-2 items-center py-3 px-6 rounded-xl hover:bg-accent', {
        "bg-primary text-foreground hover:bg-primary": isActive
    })} >{item.icon}{item.name}</Link>)
}