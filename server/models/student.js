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
      student_id: {
        type: String,
        
        unique: true
      }
}, {collection: 'Student'}
);


module.exports = mongoose.model('Student', StudentModel);

