import { StreamClientProvider } from '@/providers/StreamClientProvider'
import "@stream-io/video-react-sdk/dist/css/styles.css";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='h-screen w-full'>
            <StreamClientProvider>
                {children}
            </StreamClientProvider>
        </main>
    )
}
