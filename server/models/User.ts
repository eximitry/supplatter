const { Schema, model, Types: { ObjectId } } = require('mongoose');

const schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    tasks: [{ type: ObjectId, red: 'Tasks' }],
});

module.exports = model('User', schema);
