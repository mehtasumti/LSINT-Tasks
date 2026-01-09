require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

const createDefaultUser = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Check if user already exists
    const existingUser = await User.findOne({ email: 'admin@test.com' });

    if (existingUser) {
      console.log('ℹ️  Default user already exists:');
      console.log('   Email: admin@test.com');
      console.log('   Password: admin123');
      await mongoose.connection.close();
      return;
    }

    // Create default user
    const defaultUser = await User.create({
      name: 'Admin User',
      email: 'admin@test.com',
      password: 'admin123',
      role: 'admin'
    });

    console.log('✅ Default user created successfully!');
    console.log('');
    console.log('📝 Login Credentials:');
    console.log('   Email: admin@test.com');
    console.log('   Password: admin123');
    console.log('   Role: admin');
    console.log('');
    console.log('🔐 Use these credentials to login to the application');

    await mongoose.connection.close();
    console.log('✅ Database connection closed');
  } catch (error) {
    console.error('❌ Error creating default user:', error.message);
    process.exit(1);
  }
};

createDefaultUser();
