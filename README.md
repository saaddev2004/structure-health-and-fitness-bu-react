# Structure Health & Fitness

A modern, responsive React-based website for a health and fitness center, showcasing gym facilities, membership options, branches, and services.

## Features

- **Home Page**: Hero section, gym statistics, testimonials, tips, and special offers
- **Why Us**: About us section highlighting unique features and benefits
- **Membership**: Membership plans and pricing information
- **Our Branches**: Location details and branch information
- **Contact**: Contact form and information
- **Responsive Design**: Optimized for all devices using Bootstrap
- **Interactive Elements**: Smooth animations with Framer Motion
- **Google Maps Integration**: Display branch locations
- **reCAPTCHA**: Secure contact forms

## Technologies Used

- **Frontend**:
  - **React**: Frontend framework
  - **React Router**: Client-side routing
  - **Bootstrap**: CSS framework for responsive design
  - **Framer Motion**: Animation library
  - **React Google Maps API**: Map integration
  - **Chart.js**: Data visualization
  - **FontAwesome**: Icons
  - **React Google reCAPTCHA**: Form security

- **Backend**:
  - **Node.js**: Runtime environment
  - **Express.js**: Web framework
  - **MongoDB**: NoSQL database
  - **Mongoose**: ODM for MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/structure-health-fitness.git
   cd structure-health-fitness
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Set up the backend:
   ```bash
   cd backend
   npm install
   ```
   - Set up MongoDB (local or cloud)
   - Update `backend/.env` with your MongoDB URI

4. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

5. Start the frontend development server (in a new terminal):
   ```bash
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (irreversible)

## Project Structure

```
├── backend/             # Node.js/Express backend
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── server.js        # Main server file
│   └── .env             # Environment variables
├── src/                 # React frontend
│   ├── api/             # Data files for different sections
│   ├── components/      # Reusable UI components
│   ├── pages/           # Main page components
│   ├── sections/        # Section components for pages
│   └── App.js           # Main app component with routing
└── public/              # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is private and proprietary.

## Contact

For questions or support, please contact the development team.
