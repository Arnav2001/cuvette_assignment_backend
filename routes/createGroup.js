// routes/groups.js
const express = require('express');
const router = express.Router();
const Group = require('../models/group');

const getInitials = (name) => {
    const words = name.split(' ');
    return words.length >= 2
      ? (words[0][0] + words[1][0]).toUpperCase()
      : (words[0][0] || '').toUpperCase();
  };
  
// POST /api/groups - Create a new group
router.post('/', async (req, res) => {
  try {
    const { name, color} = req.body;

    // Validate request data
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    if (!color) {
      return res.status(400).json({ error: 'Colour is required' });
    }

    // Create a new group
    const newGroup = new Group({ name, color, initials: getInitials(name) });
    await newGroup.save();

    // Respond with the created group
    res.status(201).json({message:"Group Created Successfully"});
  } catch (error) {
    console.error('Error creating group:', error);
    res.status(500).json({ error: 'Server error',error });
  }
});

module.exports = router;
