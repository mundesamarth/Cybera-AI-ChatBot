# Cybera-AI-ChatBot

Cybera-AI-ChatBot is an AI-powered chatbot application designed to provide seamless interactions between users and AI. This project combines a React-based frontend with an Express.js backend, creating a full-stack application that offers real-time chat capabilities.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits](#credits)


## Features

- Real-time messaging between users and AI.
- Responsive and intuitive user interface built with React.
- Backend API powered by Express.js.
- Integration with ImageKit for image handling.
- MongoDB for database management.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [MongoDB](https://www.mongodb.com/) (ensure it's running locally or provide a remote URI)

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository:

```bash
git clone https://github.com/mundesamarth/Cybera-AI-ChatBot.git
cd Cybera-AI-ChatBot
```

### 2. Dependencies Backend
```bash
cd backend
npm install
```

### 3. Dependencies Frontend
```bash
cd ../frontend
npm install
```

## Running the Application

### 1. Naviagte to Root Directory
```bash
cd ..
```
### 2. Install **Concurrently** (if not installed)
```bash
npm install concurrently --save-dev
```
### 3. Run the application
```bash
docker compose up
```
## Usage
Once the application is running:

Open your browser and navigate to `http://localhost:5173` to access the chatbot interface.
Interact with the AI by typing messages into the chat input field.

## Contributing

We welcome contributions! Please follow these steps:

- Fork the repository.
- Create a new branch (`git checkout -b feature/YourFeature`).
- Commit your changes (`git commit -m 'Add some feature'`).
- Push to the branch (`git push origin feature/YourFeature`).
- Open a Pull Request.

## Credits
This project was inspired by and built with the help of the following resource:
- [YouTube Tutorial](https://youtu.be/8iAQ1h30n5I?si=FR5v2NUdE-T__qgM)

A big thanks to the creator of the tutorial for their valuable insights!

