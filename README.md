# FashionConnect - A LinkedIn for Fashionistas

FashionConnect is a social networking platform designed specifically for individuals passionate about fashion. Built with React and Vite for a fast and responsive user experience, it leverages Firebase for backend services and Google Sign-In for seamless authentication.

## Features

* **User Profiles:** Create and customize profiles showcasing your fashion interests, style, and experience.
* **Google Sign-In:** Easy and secure login using your Google account.
* **Firebase Backend:** Robust and scalable backend for user data and content storage.
* **React & Vite:** Modern and efficient front-end development with fast build times.
* **Fashion-Focused Community:** Connect with like-minded individuals, share inspiration, and discover new trends.
* **Post and Share:** Share your fashion creations, inspirations, and thoughts with the community.

## Technologies Used

* **React:** JavaScript library for building user interfaces.
* **Vite:** Next-generation frontend tooling for fast development.
* **Firebase:** Backend-as-a-service (BaaS) for authentication and data storage.
* **Google Sign-In API:** For simplified user authentication.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Firebase:**

    * Create a Firebase project on the Firebase console ([console.firebase.google.com](console.firebase.google.com)).
    * Enable Google Sign-In authentication in the Firebase console.
    * Create a web app in your Firebase project.
    * Copy the Firebase configuration object.
    * Create a `.env.local` file in the root of your project.
    * Add your Firebase configuration variables to the `.env.local` file, prefixed with `VITE_`, like this:

        ```
        VITE_API_KEY=YOUR_API_KEY
        VITE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
        VITE_PROJECT_ID=YOUR_PROJECT_ID
        VITE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
        VITE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
        VITE_APP_ID=YOUR_APP_ID
        ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This will start the development server, and you can access the application in your browser.

## Google Sign-In Setup

* Ensure that Google Sign-In is enabled in your Firebase project.
* The Google Sign-In API is integrated into the application, allowing users to authenticate with their Google accounts.

## Build for Production

To build the application for production:

```bash
npm run build
