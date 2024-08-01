require("dotenv").config();
// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const createGroup = require('./routes/createGroup');
const createChat = require('./routes/createChat');
const getGroups = require('./routes/getGroups');
const getGroupById = require('./routes/getGroupById');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Initialize Express app

const port = process.env.PORT || 2000;

// Middleware
app.use(bodyParser.json());

// MongoDB URI
const uri = "mongodb+srv://arnavkul07:bVpwQilmkolk1O4V@arnavcluster.kfezs0w.mongodb.net/?retryWrites=true&w=majority&appName=arnavCluster";

// Connect to MongoDB
mongoose.connect(uri, {
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use Routes
app.use('/groups', createGroup);
app.use('/groups', getGroups);
app.use('/group', getGroupById);
app.use('/chats', createChat);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
