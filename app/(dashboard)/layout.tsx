import Navbar from '@/components/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import {
    ClerkProvider,
} from '@clerk/nextjs'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <div className='h-screen w-full flex-col overflow-hidden'>
                <Navbar />
                <div className='flex size-full'>
                    <div>
                        <Sidebar />
                    </div>
                    <div className="flex-1">
                        {children}
                    </div>
                </div>
            </div>
        </ClerkProvider>
    )
}
