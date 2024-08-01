// models/Group.js
const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color:{type: String},
  initials: { type: String },
  chats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }] // Array of strings for chat IDs or messages
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
