import Navbar from '@/components/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-screen w-full flex-col overflow-hidden'>
            <Navbar />
            <div className='flex size-full'>
                <div>
                    <Sidebar />
                </div>
                <div className="flex-1 pt-24 px-20 h-screen w-full max-w-7xl mx-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}
