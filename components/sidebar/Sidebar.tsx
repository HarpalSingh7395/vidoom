import React from 'react'
import { Calendar, Video, Settings, LayoutDashboard } from "lucide-react";
import NavItem, { NavLink } from './SidebarItem';

const navLinks: NavLink[] = [
    {
        name: "Dashboard",
        link: "/",
        icon: <LayoutDashboard size={20} />,
    },
    {
        name: "Scheduled",
        link: "/scheduled",
        icon: <Calendar size={20} />,
    },
    {
        name: "Recordings",
        link: "/recordings",
        icon: <Video size={20} />,
    },
    {
        name: "Settings",
        link: "/settings",
        icon: <Settings size={20} />,
    },
];



export default function Sidebar() {
    return (
        <div className='max-lg:hidden  w-64 border-r bg-card h-screen px-4 pt-11 flex flex-col space-y-2'>
            {navLinks.map(item => (<NavItem key={item.name} item={item} />))}
        </div>
    )
}
