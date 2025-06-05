
import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import { StreamClient } from "@stream-io/node-sdk"

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export async function GET() {
     const user = await currentUser()

    if (!user) throw new Error("User not logged in!");
    if (!apiKey) throw new Error("No API key provided");
    if (!apiSecret) throw new Error("No stream secret provided");

    const streamClient = new StreamClient(apiKey, apiSecret, {
        timeout: 3000
    });
    const expiration = Math.round(new Date().getTime() / 1000) + 60 + 60;
    const issued = Math.floor(Date.now() / 1000) - 60;

    const token = streamClient.generateUserToken({
        user_id: user.id,
        exp: expiration,
        iat: issued,
    })
    return NextResponse.json({ token }, { status: 200 })
}