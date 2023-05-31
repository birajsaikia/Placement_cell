let mongoose = require('mongoose');
let studentschema = new mongoose.Schema({
    batch: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    collage: {
        type: String,
        required: true,
        unique: true
    },
    dsa: {
        type: String,
        required: true,
        unique: true
    },
    forntend: {
        type: String,
        required: true,
        unique: true
    },
    react: {
        type: String,
        required: true,
        unique: true
    }
    
});

let Student = mongoose.model('Student', studentschema)
module.exports = Student;