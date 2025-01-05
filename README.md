# Chat Application with AI Assistance and Collaboration

A real-time collaborative chat application that enables multiple users to interact, share files, and manage tasks in shared projects. The platform includes an AI-powered assistant for intelligent recommendations, code generation, and workflow automation.

## Features

- **Real-time Chat**: Seamless communication using WebSocket for low-latency interactions.
- **Collaboration**: Multiple users can work on shared projects with task management and file sharing.
- **AI Assistant**: Integrated OpenAI-powered assistant to provide intelligent suggestions, assist in coding, and improve productivity.
- **Secure Authentication**: User authentication with bcrypt for password encryption and JWT for tokenized authorization.
- **Scalable Architecture**: Designed with MongoDB for efficient data management and support for real-time updates.

---

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js, WebSocket
- **Database**: MongoDB
- **Authentication**: bcrypt, JWT
- **AI Integration**: Google Gemini
- **Real-time Communication**: Socket.io
- **Caching**: Redis
---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chat-application.git
   cd chat-application
   ```

2. Install dependencies for both the backend and frontend:
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory with the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     OPENAI_API_KEY=your_openai_api_key
     REDIS_HOST=your_redis_host
     ```

4. Start the application:
   ```bash
   # Backend
   cd backend
   npm start

   # Frontend
   cd ../frontend
   npm start
   ```

5. Open your browser and navigate to `http://localhost:5173`.

---

## Project Structure

```
.
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
├── frontend
│   ├── public
│   ├── src
│   ├── components
│   ├── pages
│   └── App.js
└── README.md
```

- **Backend**: Contains RESTful APIs, WebSocket server, and AI assistant integration.
- **Frontend**: React.js-based client for user interaction.

---

## Features Breakdown

### Real-Time Chat
- Implemented using WebSocket and Socket.io.
- Supports group chats and direct messages.

### AI Assistant
- Integrated using OpenAI APIs for intelligent task recommendations and code generation.

### Authentication
- Password encryption with bcrypt.
- JWT-based authorization for secure access.

### Database
- MongoDB schemas for users, projects, and chat histories.
- Optimized queries for real-time updates and scalability.

---

## Future Enhancements

- Add voice and video chat features.
- Implement project analytics dashboard.
- Expand AI assistant capabilities with advanced task automation.

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## Contact

For any inquiries or support, please contact:
- **Email**: shivanshgaur28@gmail.com
- **LinkedIn**: [Shivansh Gaur](https://linkedin.com/in/shivansh-gaur)
- **GitHub**: [Shivansh-Gaur2](https://github.com/Shivansh-Gaur2)
