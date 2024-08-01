// routes/groups.js
const express = require('express');
const router = express.Router();
const Group = require('../models/group');
const Chat = require('../models/chat');

// POST /api/groups - Create a new group
router.get('/:id', async (req, res) => {
  try {
    const {id} = req.params;

    // Create a new group
    const groups = await Group.findById(id).populate('chats');


    // Respond with the created group
    res.status(201).json(groups);
  } catch (error) {
    console.error('Error creating group:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
