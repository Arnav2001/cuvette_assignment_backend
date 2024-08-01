// models/Chat.js
const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  content: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
