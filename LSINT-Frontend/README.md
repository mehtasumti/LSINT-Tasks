# Interview Test Application - Frontend

A modern Next.js application with user authentication and management features.

## Features

- User authentication (login/register)
- Protected routes
- User management interface
- Responsive design
- Clean and minimalistic UI
- Axios-based API integration

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running (see backend README)

## Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Update the `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `http://localhost:5000/api` |

**Note:** In Next.js, environment variables that need to be accessible in the browser must be prefixed with `NEXT_PUBLIC_`.

## Running the Application

### Development mode:
```bash
npm run dev
```

The application will start on `http://localhost:3000`

### Production build:
```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── components/
│   ├── Layout.js         # Main layout wrapper
│   └── Navbar.js         # Navigation component
├── pages/
│   ├── _app.js          # Next.js app wrapper
│   ├── _document.js     # Custom document
│   ├── index.js         # Home page
│   ├── about.js         # About page
│   ├── login.js         # Login/Register page
│   └── users.js         # User management page
├── services/
│   ├── api.js           # Axios configuration
│   ├── authService.js   # Authentication service
│   └── userService.js   # User CRUD service
├── styles/
│   ├── globals.css      # Global styles
│   ├── Home.module.css
│   ├── About.module.css
│   ├── Login.module.css
│   ├── Users.module.css
│   └── Navbar.module.css
├── .env.example
├── .env.local
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package.json
└── README.md
```

## Pages

### Home Page (`/`)
- Welcome page with feature highlights
- Shows user information when logged in

### About Page (`/about`)
- Information about the application
- Technology stack details
- Features overview

### Login Page (`/login`)
- User login form
- User registration form
- Toggle between login and register modes

### Users Page (`/users`)
- Protected route (requires authentication)
- View all users
- Add new users
- Edit existing users
- Delete users

## API Services

### Authentication Service
- `login(email, password)` - User login
- `register(name, email, password)` - User registration
- `logout()` - Clear local storage
- `getCurrentUser()` - Get current logged-in user
- `getProfile()` - Fetch user profile from API

### User Service
- `getAllUsers()` - Get all users
- `getUserById(id)` - Get specific user
- `createUser(userData)` - Create new user
- `updateUser(id, userData)` - Update user
- `deleteUser(id)` - Delete user

## Authentication

The application uses JWT (JSON Web Tokens) for authentication:

1. User logs in or registers
2. JWT token is received from the backend
3. Token is stored in localStorage
4. Token is automatically included in all API requests via Axios interceptor
5. If token is invalid or expired (401 response), user is redirected to login

## Styling

- CSS Modules for component-specific styles
- Global CSS for shared styles and utilities
- CSS Variables for theming
- Responsive design with media queries
- No external CSS frameworks for minimal bundle size

## Key Features

### Protected Routes
Pages that require authentication automatically redirect to login if user is not authenticated.

### Axios Interceptors
- Request interceptor: Automatically adds JWT token to headers
- Response interceptor: Handles 401 errors by redirecting to login

### Form Validation
- Client-side validation for all forms
- Server-side error messages displayed to users

### Error Handling
- User-friendly error messages
- Graceful handling of network errors
- Loading states for async operations

## Deployment

### Vercel (Recommended for Next.js)
1. Push your code to GitHub
2. Import project in Vercel
3. Set environment variable: `NEXT_PUBLIC_API_URL`
4. Deploy

### Other Platforms (AWS, Netlify, etc.)
1. Build the application: `npm run build`
2. Set environment variables
3. Deploy the `.next` folder and required files
4. Ensure the start command is set to `npm start`

### Environment Variables for Production
```env
NEXT_PUBLIC_API_URL=https://your-backend-api-url.com/api
```

## Development Guidelines

### Adding New Pages
1. Create a new file in the `pages/` directory
2. Create corresponding CSS module in `styles/` directory
3. Add navigation link in `Navbar.js` if needed

### Adding New API Endpoints
1. Add new service function in appropriate service file
2. Use the `api` instance from `services/api.js`
3. Handle errors appropriately

### Styling Guidelines
- Use CSS Modules for component styles
- Use global CSS variables for colors and common values
- Keep styles minimal and clean
- Ensure responsive design

## Testing the Application

1. Ensure backend is running on port 5000
2. Start frontend development server: `npm run dev`
3. Open browser to `http://localhost:3000`
4. Test the following flow:
   - Register a new user
   - Login with credentials
   - View home page
   - Navigate to Users page
   - Add/Edit/Delete users
   - Logout

## Troubleshooting

### API Connection Issues
- Verify backend is running
- Check `NEXT_PUBLIC_API_URL` in `.env.local`
- Check browser console for CORS errors

### Authentication Issues
- Clear localStorage in browser DevTools
- Check JWT token in Application/Storage tab
- Verify token is being sent in request headers

### Build Errors
- Delete `.next` folder and `node_modules`
- Run `npm install` again
- Try `npm run build`

### Page Not Found (404)
- Ensure file is in `pages/` directory
- Check file naming (Next.js uses file-based routing)
- Restart development server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Next.js automatic code splitting
- Optimized production builds
- Static page generation where possible
- Minimal JavaScript bundle size

## Security Notes

- Never commit `.env.local` file
- Keep API URL secure
- JWT tokens stored in localStorage (consider httpOnly cookies for production)
- All API requests use HTTPS in production

## License

ISC
