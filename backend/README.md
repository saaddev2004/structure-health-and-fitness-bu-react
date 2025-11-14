# Backend for Structure Health and Fitness

This backend handles data storage for the fitness website using Node.js, Express, and MongoDB.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Set up MongoDB:
   - Install MongoDB locally or use a cloud service like MongoDB Atlas
   - Update the MONGODB_URI in .env file

3. Start the server:
   ```
   npm run dev
   ```

## API Endpoints

- POST /api/signup: Save signup data (name, email)
- POST /api/membership: Save membership application data

## Environment Variables

- MONGODB_URI: MongoDB connection string
- PORT: Server port (default 5000)