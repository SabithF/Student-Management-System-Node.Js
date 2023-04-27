const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProgramModel = new Schema ({
    pname: {
        type: String,
        
      },
      duration: {
        type: String,
        
      },
      cost: {
        type: String,
        
      },
      programid: {
        type: String,
        
        unique: true
      }
}, {collection: 'Program'}
);


const Program = mongoose.model('Program', ProgramModel);
module.exports = Program;
