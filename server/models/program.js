const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProgramModel = new Schema ({
    pname: {
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
      programid: {
        type: String,
        required: true,
        unique: true
      }
}, {collection: 'Program'}
);


const Program = mongoose.model('Program', ProgramModel);
module.exports = Program;
