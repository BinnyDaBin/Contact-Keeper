const express = require('express');
const connectDB = require('./config/db');

const app = express();

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extened: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the Contact Keeper API...' })
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
