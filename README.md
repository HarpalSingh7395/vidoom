# Vidoom - Video Conferencing App

Vidoom is a feature-rich video conferencing application built with Next.js, TypeScript, and powered by Stream's robust video SDK. It provides a seamless and interactive experience for virtual meetings, webinars, and online collaboration.

## ✨ Features

*   **Authentication:** Secure user sign-up and sign-in functionality using Clerk.
*   **Create Meetings:** Instantly start a new meeting with a unique meeting ID.
*   **Schedule Meetings:** Plan meetings for a future date and time.
*   **Join Meetings:** Easily join existing meetings using the meeting link.
*   **Meeting Recordings:** View and manage recordings of past meetings.
*   **Personal Meeting Room:** A dedicated space for your personal meetings.
*   **Real-time Communication:** High-quality video and audio powered by Stream.
*   **Responsive Design:** A beautiful and intuitive user interface that works on all devices.

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

*   [Node.js](https://nodejs.org/en/) (v20 or later)
*   [Yarn](https://yarnpkg.com/) or npm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/HarpalSingh7395/vidoom.git
    cd vidoom
    ```

2.  **Install dependencies:**
    ```bash
    yarn install
    # or
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of your project and add the following environment variables. You will need to get these credentials from [Clerk](https://clerk.com/) and [Stream](https://getstream.io/).

    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=

    NEXT_PUBLIC_STREAM_API_KEY=
    STREAM_SECRET_KEY=

    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    ```

4.  **Run the development server:**
    ```bash
    yarn dev
    # or
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

In the project directory, you can run:

*   `yarn dev`: Runs the app in the development mode.
*   `yarn build`: Builds the app for production to the `.next` folder.
*   `yarn start`: Starts a Next.js production server.
*   `yarn lint`: Runs ESLint to find and fix problems in your code.

## 🛠️ Technologies Used

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Authentication:** [Clerk](https://clerk.com/)
*   **Video & Audio:** [Stream](https://getstream.io/video/docs/react/)
*   **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Form Management:** [React Hook Form](https://react-hook-form.com/)
*   **Schema Validation:** [Zod](https://zod.dev/)
