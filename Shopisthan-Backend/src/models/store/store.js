const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const shopSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    shopName:{
      type: String,
      required: true
  
      },
      shopType:{
          type: String,
          required: true,
          trim: true,
      },
      shopEmail:{
          type: String,
          required: true,
          trim: true,
          unique: true,
      },
      hash_password:{
          type: String,
          required: true
      },
      shopCategory:{
          type: String,
          trim: true,
          required: true
          
      },
      shopPhoneNo:{
          type: Number,
          trim: true,
          required: true
      },
      shopAddress:{
        type: String,
        trim: true,
        required: true
        
    },
    role:{
        type: String,
        default: 'store'
    },

      shopPofilePicture: {type: String},
      createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true

    },
  
  },{timestamps: true});



  shopSchema.virtual('password')
.set(function(password){
   this.hash_password = bcrypt.hashSync(password, 10);
});



shopSchema.methods = {
    authenticate : function(password){
        return bcrypt.compareSync(password, this.hash_password);
    }
}

module.exports = mongoose.model('Store',shopSchema);