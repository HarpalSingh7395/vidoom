'use client'
import { tokenProvider } from "@/actions/stream.action";
import Spinner from "@/components/Spinner";
import { useUser } from "@clerk/nextjs";
import {
    StreamVideo,
    StreamVideoClient,
} from "@stream-io/video-react-sdk";
import { PropsWithChildren, useEffect, useState } from "react";


const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;


export const StreamClientProvider = ({ children }: PropsWithChildren) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>();
    const { user, isLoaded } = useUser();

    useEffect(() => {
        if (!user || !isLoaded) return;
        if (!apiKey) throw new Error("No Stream API key found.")
        const client = new StreamVideoClient({
            apiKey: apiKey,
            user: {
                id: user.id,
                name: user.username || user.id,
                image: user.imageUrl,
            },
            tokenProvider: tokenProvider,
        })
        setVideoClient(client)
    }, [user, isLoaded])

    if (!videoClient) return <Spinner />;

    return (
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    );
};