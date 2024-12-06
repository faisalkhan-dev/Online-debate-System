# Dekho Project 

Welcome to the **Dekho** project! This is a platform where users can engage in debates with each other, based on topics of their choice, with an option to also debate AI-powered bots. The website is built using **React** for the frontend and **Express.js** for the backend.

## Features

1. **User Authentication**: Users can sign up or log in via Gmail to access the platform.
2. **Create Debate Requests**: Users can create a debate request, specifying:
    - **Topic** of debate
    - **Time** of debate
3. **Join Debate**:
    - A maximum of 5 users can join a single debate.
4. **AI Debate Option**: If users prefer, they can also opt to debate with an AI, powered by advanced conversational models.
5. **React Frontend**: The frontend is built with React for a dynamic and interactive user experience.
6. **Express Backend**: The backend is built with Express.js, providing a fast and scalable server.

```
dekho/
│
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── pages/        # Page components
│   │   └── App.js        # Main React app entry point
│
├── server/               # Express backend
│   ├── models/           # MongoDB models (e.g., User, Debate)
│   ├── routes/           # API routes (e.g., Auth, Debates)
│   ├── controllers/      # Route controllers (e.g., login, create debate)
│   ├── server.js         # Express server entry point
│   └── config/           # Configuration files (e.g., Google OAuth)
│
└── README.md             # This file
```

## Tech Stack

- **Frontend**:
    - React.js
    - Axios (for API calls)
    - React Router (for routing)
    - Tailwindcss (for styling)

- **Backend**:
    - Express.js
    - MongoDB (database)
    - Google OAuth (for authentication)

- **AI Integration** (Future enhancement):
    - AI-powered debate using models like GPT or other conversational AI models.

## Contributing

We welcome contributions to the Dekho project! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Create a new Pull Request.
