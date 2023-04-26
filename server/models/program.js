const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProgramModel = new Schema ({
    name: {
        type: String,
        required: true
      },
      duration: {
        type: String,
        required: true
      },
      cost: {
        type: String,
        required: true
      },
      program_id: {
        type: String,
        required: true,
        unique: true
      }
}, {collection: 'Student'}, {timstamps: true}
);


module.exports = mongoose.model('Program', ProgramModel);
