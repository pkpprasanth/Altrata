

```markdown
# Assignment Jacksclub

This project showcases a simple full-stack application using React for the front end and Node.js with TypeScript for the backend. The backend uses Express and simulates DynamoDB operations, and the communication between the frontend and backend is facilitated by Axios. The UI components are built using Ant Design.

## Project Structure

The project is structured with a clear organization for both frontend and backend:

  - **`backend/`**: Node.js with TypeScript backend.
    - **`controllers/`**: Controllers for handling HTTP requests.
    - **`models/`**: Interfaces defining the data structures.
    - **`repositories/`**: Simulated DynamoDB operations.
    - **`routes/`**: Define routes for different functionalities.
    - **`services/`**: Business logic for different features.
  - **`frontend/`**: React with TypeScript frontend.
    - **`components/`**: React components for different parts of the UI.

## Getting Started

Follow the steps below to set up and run the project on your local machine:

### Backend Setup

1. Navigate to the `backend` directory.
   ```bash
   cd src/backend
   ```

2. Install dependencies.
   ```bash
   npm install
   ```

3. Start the backend server.
   ```bash
   npm start
   ```

   The backend server will run on `http://localhost:4000`.

### Frontend Setup

1. Navigate to the `frontend` directory.
   ```bash
   cd frontend
   ```

2. Install dependencies.
   ```bash
   npm install
   ```

3. Start the frontend development server.
   ```bash
   npm start
   ```

   The React app will run on `http://localhost:3000`.

## Usage

- Open your browser and go to `http://localhost:3000` to access the React app.
- Use the provided UI to retrieve the user's balance and process transactions.
