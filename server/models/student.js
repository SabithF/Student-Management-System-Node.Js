const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentModel = new Schema ({
    name: {
        type: String,
      },
      address: {
        type: String,
      },
      contact: {
        type: String,
      },
      studentid: {
        type: String,
        
        required: true,
        unique: true
      }
}, {collection: 'Student'}
);


const Student = mongoose.model('Student', StudentModel);
module.exports = Student;

