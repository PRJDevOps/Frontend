# React Vite Frontend with Shadcn and Tailwind

This is a React-based frontend application built with Vite, utilizing Shadcn for UI components and Tailwind CSS for styling. The project includes several pages and features private routing for secure access control.

## Features

- **Routing:** Implemented using `react-router-dom`.
- **Private Routes:** Access control for admin-only pages using `PrivateRoute` utility.
- **Styling:** Designed with Tailwind CSS.
- **UI Components:** Enhanced with Shadcn.
- **Dark Mode Support:** Includes theme toggling using `ThemeToggle`.

## Project Structure

```plaintext
src/
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
```

## Installation

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

Run the development server using:

```bash
npm run dev
```

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
- **Vite:** Build tool for fast development and production builds.

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
5. Open a pull request
