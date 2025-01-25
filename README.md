# React Vite Frontend with Shadcn and Tailwind

<<<<<<< HEAD
This is a React-based frontend application built with Vite, utilizing Shadcn for UI components and Tailwind CSS for styling. The project includes several pages and features private routing for secure access control.

## Features

- **Routing:** Implemented using `react-router-dom`.
- **Private Routes:** Access control for admin-only pages using `PrivateRoute` utility.
- **Styling:** Designed with Tailwind CSS.
- **UI Components:** Enhanced with Shadcn.
- # **Dark Mode Support:** Includes theme toggling using `ThemeToggle`.

## Overview

This is a React-based frontend application built with Vite, utilizing Shadcn for UI components and Tailwind CSS for styling. The project incorporates powerful tools like Lucide for icons, Recharts for data visualization, and Axios for seamless API communication. It includes several pages and features private routing for secure access control, making it a robust solution for modern web development.

## Features

1. **Routing:** Implemented using `react-router-dom` for seamless navigation.
2. **Private Routes:** Access control for admin-only pages using a `PrivateRoute` utility.
3. **Styling:** Designed with the utility-first CSS framework, Tailwind CSS, ensuring a responsive and clean design.
4. **UI Components:** Enhanced user interface with pre-built components from Shadcn.
5. **Dark Mode Support:** Includes theme toggling functionality using `ThemeToggle` for a better user experience.
6. **Icon Integration:** Beautifully crafted and customizable icons provided by Lucide for consistent and scalable vector graphics.
7. **Data Visualization:** Effective representation of data through customizable and responsive charts with Recharts.
8. **API Communication:** Simplified data fetching and state management with Axios for making HTTP requests.
   > > > > > > > frontend

## Project Structure

```plaintext
src/
<<<<<<< HEAD
├── assets/
├── components/
│   ├── dashboard/
│   ├── sidebar/
│   ├── ui/
│   │   ├── theme-provider.jsx
│   │   └── ThemeToggle.jsx
├── context/
├── hooks/
├── layout/
│   ├── header.jsx
│   ├── loading.jsx
│   └── sidebar.jsx
├── lib/
│   └── utils.js
├── pages/
│   ├── Dashboard.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   └── Profile.jsx
├── util/
│   ├── adminRoute.jsx
│   └── checkAuth.jsx
├── App.css
├── App.jsx
├── index.css
├── main.jsx
└── .env
=======
├── assets/                  # Static assets like images and fonts
├── components/              # Reusable UI components
│   ├── dashboard/           # Dashboard-specific components
│   ├── sidebar/             # Sidebar-specific components
│   ├── ui/                  # Common UI elements
│   │   ├── theme-provider.jsx  # Context provider for theme
│   │   └── ThemeToggle.jsx     # Dark mode toggle component
├── context/                 # React context for global state management
├── hooks/                   # Custom React hooks
├── layout/                  # Layout components
│   ├── header.jsx           # Header component
│   ├── loading.jsx          # Loading spinner component
│   └── sidebar.jsx          # Sidebar layout
├── lib/                     # Utility functions and helpers
│   └── utils.js
├── pages/                   # Application pages
│   ├── Dashboard.jsx        # Admin dashboard
│   ├── Home.jsx             # Public home page
│   ├── Login.jsx            # Login page
│   └── Profile.jsx          # User profile page
├── util/                    # Utilities for routing and authentication
│   ├── adminRoute.jsx       # Admin route component
│   └── checkAuth.jsx        # Authentication check utility
├── App.css                  # Global styles
├── App.jsx                  # Main application component
├── index.css                # Tailwind configuration
├── main.jsx                 # Entry point of the application
└── .env                     # Environment variables
>>>>>>> frontend
```

## Installation

<<<<<<< HEAD

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at [http://localhost:5173](http://localhost:5173).

## Usage

### Running the Project

# Run the development server using:

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

> > > > > > > frontend

```bash
npm run dev
```

<<<<<<< HEAD

### Build for Production

To build the project for production:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

### Preview the Production Build

To preview the production build locally:

```bash
npm run preview
```

## Dependencies

- **React:** Frontend library for building user interfaces.
- **React Router DOM:** For routing and navigation.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Shadcn:** UI components library.
- # **Vite:** Build tool for fast development and production builds.
  Open the application in your browser at [http://localhost:5173](http://localhost:5173).

## Dependencies

- **React:** A JavaScript library for building user interfaces. React simplifies the process of creating interactive user interfaces by using a component-based architecture. This allows developers to build encapsulated components that manage their own state and compose them to create complex user interfaces. React also uses a virtual DOM for efficient UI updates, ensuring high performance in modern web applications. Learn more at [React Docs](https://reactjs.org/).

- **React Router DOM:** Provides routing and navigation capabilities. It allows developers to declaratively define routes and manage navigation between them. With features like dynamic routing, nested routes, and route guards, React Router DOM ensures seamless navigation within single-page applications. Detailed documentation is available at [React Router DOM Docs](https://reactrouter.com/en/main).

- **Tailwind CSS:** Utility-first CSS framework for responsive and scalable styling. Tailwind provides low-level utility classes that can be combined to design custom components without leaving the HTML file. Its responsive design utilities and design consistency features make it highly effective for rapid UI development. For more information, refer to [Tailwind CSS Docs](https://tailwindcss.com/docs).

- **Shadcn:** A collection of UI components designed for React applications. Shadcn provides pre-built and customizable components that adhere to best practices and modern design patterns. It integrates seamlessly with React and Tailwind CSS to speed up the development process. Explore more at [Shadcn Docs](https://shadcn.dev/).

- **Vite:** A fast build tool for development and optimized production builds. Vite offers blazing-fast server starts and hot module replacement (HMR), ensuring a smooth development experience. It supports modern JavaScript features out of the box and is optimized for building performant web applications. Learn more at [Vite Docs](https://vitejs.dev/).

- **Lucide:** A library of beautifully crafted and customizable icons. Lucide icons can be easily integrated into React components for consistent and scalable vector graphics. Explore more at [Lucide Docs](https://lucide.dev/).

- **Recharts:** A powerful charting library for React applications. Recharts provides customizable and responsive chart components to visualize data effectively. Learn more at [Recharts Docs](https://recharts.org/).

- **Axios:** A promise-based HTTP client for making API requests. Axios simplifies data fetching and state management in React applications with its intuitive API. Learn more at [Axios Docs](https://axios-http.com/).
  > > > > > > > frontend

## Environment Variables

Create a `.env` file in the root directory for configuration. Example:

```env
VITE_API_BASE_URL=<your-api-base-url>
```

## Custom Private Route

The `PrivateRoute` component restricts access to admin-only pages. Example usage:

```jsx
<Route
  path="/dashboard"
  element={
    <PrivateRoute isAdminRoute={true}>
      <Dashboard />
    </PrivateRoute>
  }
/>
```

## Contributing

Contributions are welcome! Please follow these steps:

<<<<<<< HEAD

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. # Open a pull request
6. **Fork the repository.**
7. **Create a feature branch:**
   ```bash
   git checkout -b feature-name
   ```
8. **Commit your changes:**
   ```bash
   git commit -m "Add feature description"
   ```
9. **Push to the branch:**
   ```bash
   git push origin feature-name
   ```
10. **Open a pull request.** > > > > > > > frontend > > > > > > > .
    .
