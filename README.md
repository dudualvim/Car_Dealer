# Car Dealer App

The **Car Dealer App** is a web application that allows users to select a car make and model year to view all available models from that make and year. The project utilizes **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and the **VPIC API** to provide detailed vehicle information.

## Features

- **Search by Make and Year**: Users can select a car make and model year to view the available models.
- **VPIC API Integration**: Fetches detailed vehicle data from the VPIC API.
- **Responsive Design**: The layout adapts to different screen sizes, ensuring a smooth experience on any device.
- **Code Quality**: Configured with ESLint and Prettier to maintain consistency and code quality.

## Technologies Used

- **Next.js**: React framework for server-side rendering and modern web application development.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **VPIC API**: Public API to fetch data on vehicle makes and models.

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or later): [Download here](https://nodejs.org/).
- **npm** (comes with Node.js) or **yarn**: [Yarn installation guide](https://yarnpkg.com/getting-started/install).

### Steps

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/car-dealer-app.git
   cd car-dealer-app


2. Install dependencies (this will install Next.js, React, and other packages):

   ```bash
   npm install



3. Create a .env.local file in the root directory and add the API URL:

   ```bash
   NEXT_PUBLIC_API_BASE_URL=https://vpic.nhtsa.dot.gov/api/vehicles


   
4. Start the development server:

   ```bash
   npm run dev


Available Scripts
  **npm run dev:** Starts the development server.
  **npm run build:** Builds the application for production.
  **npm run start:** Starts the production server.
  **npm run lint:** Runs ESLint to check for linting errors.
  **npm run format:** Formats the code using Prettier.
  

Contribution
If you want to contribute to this project, follow these steps:

Fork the project.
Create a new branch (git checkout -b feature/new-feature).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature/new-feature).
Open a Pull Request.
