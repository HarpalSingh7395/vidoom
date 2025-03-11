'use client'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import { StreamClientProvider } from '@/providers/StreamClientProvider'
import "@stream-io/video-react-sdk/dist/css/styles.css";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-screen w-full flex-col overflow-hidden'>
            <Navbar />
            <div className='flex size-full'>
                <div>
                    <Sidebar />
                </div>
                <div className="flex-1 pt-24 px-8 md:px-20 h-screen w-full max-w-7xl mx-auto max-h-screen overflow-y-auto pb-8">
                    <StreamClientProvider>
                        {children}
                    </StreamClientProvider>
                </div>
            </div>
        </div>
    )
}
