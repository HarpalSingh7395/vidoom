# Vidoom: Seamless Video Meetings with Next.js, Tailwind CSS, Stream, & Clerk

Welcome to Vidoom, a modern and intuitive video conferencing application. Experience effortless communication with instant meetings, scheduled events, and recorded sessions, all built with cutting-edge technologies.

## Features

* **Instant Meetings:** Start a video call instantly with a single click. No pre-planning required.
* **Scheduled Meetings:** Plan your meetings in advance with easy date and time selection.
* **Recording & Playback:** Capture and revisit important meetings with convenient recording and playback features.
* **Secure User Authentication:** Robust user management and security provided by Clerk.
* **High-Quality Real-time Communication:** Powered by Stream for crystal-clear video and audio.
* **Responsive and Beautiful UI:** Designed with Tailwind CSS for a seamless experience on all devices.

## Technologies Used

* **Next.js:** React framework for efficient server-side rendering and optimal performance.
* **Tailwind CSS:** Utility-first CSS framework for rapid and consistent UI development.
* **Stream Video:** Real-time video and audio communication platform for reliable connections.
* **Clerk:** User authentication and management for secure access.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [your-repository-url]
    cd vidoom
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**

    * Create a `.env.local` file in the root directory.
    * Add your Clerk and Stream API keys:

        ```
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
        CLERK_SECRET_KEY=your_clerk_secret_key
        NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
        STREAM_API_SECRET=your_stream_api_secret
        NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
        NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
        NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
        NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
        ```

    * Replace the placeholder keys with your actual API keys obtained from the Clerk and Stream dashboards.

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

5.  **Open your browser:**

    * Navigate to `http://localhost:3000` to view the application.


## Clerk Setup

1.  **Create a Clerk account:**
    * Sign up at [Clerk.dev](https://clerk.dev/).
2.  **Create an application:**
    * Follow the instructions to create a new Clerk application.
3.  **Obtain API keys:**
    * Find your `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` in your Clerk dashboard.

## Stream Setup

1.  **Create a Stream account:**
    * Sign up at [getstream.io](https://getstream.io/).
2.  **Create a Video application:**
    * Follow the instructions to create a new Stream Video application.
3.  **Obtain API keys:**
    * Find your `NEXT_PUBLIC_STREAM_API_KEY` and `STREAM_API_SECRET` in your Stream dashboard.

## Deployment

* Deploy your Next.js application to your preferred hosting platform (e.g., Vercel, Netlify, AWS Amplify).
* Ensure your environment variables are correctly configured in your deployment environment.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

[MIT](LICENSE)

## Acknowledgements

* Next.js
* Tailwind CSS
* Stream Video
* Clerk

Enjoy your Vidoom meetings!