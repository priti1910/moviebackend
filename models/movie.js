var mongoose = require ('mongoose');
var movieSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:true,
            maxlength:128,
            trim:true
        },
        img:{
            type: String,
            required:true
             
        },
        summary:{
            type: String,
            required:true
        }
    }
)
module.exports = mongoose.model('Movie',movieSchema)