# Interview Test Application - Backend

A Node.js/Express REST API with MongoDB for user authentication and management.

## Features

- User authentication (register/login) with JWT
- User CRUD operations
- MongoDB database integration
- Secure password hashing with bcryptjs
- Protected API routes
- CORS enabled

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/interview-test-db
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
FRONTEND_URL=http://localhost:3000
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Port number for the server | `5000` |
| `NODE_ENV` | Environment mode | `development` or `production` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/interview-test-db` or `mongodb+srv://username:password@cluster.mongodb.net/dbname` |
| `JWT_SECRET` | Secret key for JWT token generation | Any random string (use a strong secret in production) |
| `FRONTEND_URL` | Frontend application URL for CORS | `http://localhost:3000` |

## Running the Application

### Development mode (with auto-restart):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## Default User

A default admin user is pre-created for testing:

- **Email**: `admin@test.com`
- **Password**: `admin123`
- **Role**: Admin

To create this user again or in a new database, run:
```bash
npm run create-user
```

## API Endpoints

### Authentication Routes

#### Register a new user
```
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get user profile
```
GET /api/auth/profile
Authorization: Bearer <token>
```

### User Routes (Protected)

All user routes require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

#### Get all users
```
GET /api/users
```

#### Get user by ID
```
GET /api/users/:id
```

#### Create a new user
```
POST /api/users
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "password123",
  "role": "user"
}
```

#### Update user
```
PUT /api/users/:id
Content-Type: application/json

{
  "name": "Jane Updated",
  "email": "jane.updated@example.com"
}
```

#### Delete user
```
DELETE /api/users/:id
```

## Project Structure

```
backend/
├── config/
│   └── db.js              # Database connection
├── controllers/
│   ├── authController.js  # Authentication logic
│   └── userController.js  # User CRUD logic
├── middleware/
│   └── auth.js            # JWT authentication middleware
├── models/
│   └── User.js            # User model schema
├── routes/
│   ├── authRoutes.js      # Auth endpoints
│   └── userRoutes.js      # User endpoints
├── .env.example           # Example environment variables
├── .gitignore
├── package.json
├── README.md
└── server.js              # Main application file
```

## Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (enum: ['user', 'admin']),
  createdAt: Date
}
```

## Deployment

### MongoDB Atlas Setup
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in your `.env` file

### Deploying to AWS, Heroku, or other platforms
1. Set all environment variables in your hosting platform
2. Ensure MongoDB connection string is accessible
3. Set `NODE_ENV` to `production`
4. Deploy the application

## Testing the API

You can test the API using:
- Postman
- Thunder Client (VS Code extension)
- curl commands
- Or the provided frontend application

## Security Notes

- Always use a strong `JWT_SECRET` in production
- Use HTTPS in production
- Keep your `.env` file secure and never commit it to version control
- Use MongoDB Atlas or a secure MongoDB instance in production
- Consider adding rate limiting for production use

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally or connection string is correct
- Check network access settings in MongoDB Atlas
- Verify database user credentials

### Port Already in Use
- Change the `PORT` in `.env` file
- Kill the process using port 5000: `lsof -ti:5000 | xargs kill`

## License

ISC
