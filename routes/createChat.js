// routes/chats.js
const express = require('express');
const router = express.Router();
const Chat = require('../models/chat');
const moment = require('moment'); // For date formatting
const Group = require('../models/group');


// POST /api/chats - Create a new chat
router.patch('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const { content } = req.body;

    // Validate request data
    if (!content) {
      return res.status(400).json({ message: 'Content is required' });
    }
    const group = await Group.findById(id);
    if(!group){
        return res.status(404).json({error:"Group id is invalid"});
    }
    // Format date and time
    const formattedDate = moment().format('D MMM YYYY'); // e.g., "9 Mar 2023"
    const formattedTime = moment().format('h:mm A'); // e.g., "10:10 AM"

    // Create a new chat
    const newChat = new Chat({
      content,
      date: formattedDate,
      time: formattedTime,
    });
    await newChat.save();

    group.chats.push(newChat._id);
    await group.save();
    // Respond with the created chat
    res.status(201).json({newChat,group});
  } catch (error) {
    console.error('Error creating chat:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
