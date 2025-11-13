// In userModel.js
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is Required']
    },
    email:{
        type:String,
        required: [true, 'Email is Required']
    },
    password:{
        type: String,
        required:[true, 'Password is Required']
    },
    college:{
        type: String,
        default: false
    },
    course:{
        type: String,
        default: null
    },
    year:{
        type: String,
        default: null
    },
    imgurl:{
        type: String,
        default: null
    },
    Interest:{
        type:String,
        default: null
    },

    // --- ADD THESE MISSING FIELDS ---
    connections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' // A list of users you are connected to
    }],
    invitationsReceived: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' // A list of users who sent you an invitation
    }],
    invitationsSent: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' // A list of users you sent an invitation to
    }]
    // ----------------------------------

}, {timestamps:true}
);

// Note: Your model was named 'user' (lowercase)
// The 'ref' fields above must match this name.
const userModel = mongoose.model('user', userSchema);

export default userModel;