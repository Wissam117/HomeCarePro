const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs'); // For password hashing
const dotenv = require('dotenv'); // For environment variables (optional)
const cors = require('cors');

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port or default to 5000


app.use(cors());
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define the User schema
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String },
  userType: { type: String, required: true },
  password: { type: String, required: true },
});

// Hash password before saving a user
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);

// Body parser middleware for handling form data
app.use(bodyParser.json());

// Signup route
app.post('/signup', async (req, res) => {
  try {
    const { userName, email, phoneNumber, userType, password } = req.body;

    // Check for existing user with email or username
    const existingUser = await User.findOne({ $or: [{ email }, { userName }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists!' });
    }

    // Create a new user
    const newUser = new User({ userName, email, phoneNumber, userType, password });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully!' });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Server error during signup' });
  }
});

app.post('/signin', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Validate email and password
      if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
      }
  
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Compare hashed passwords (using bcrypt)
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Login successful (implement session management or JWT token generation here)
      res.status(200).json({ message: 'Login successful!' }); // Or send user data with a JWT
  
    } catch (err) {
      console.error('Signin error:', err);
      res.status(500).json({ message: 'Server error during signin' });
    }
  });

app.listen(port, () => console.log(`Server listening on port ${port}`));