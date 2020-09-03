const { Schema, model } = require('mongoose')

const UserSchema = new Schema(
    {
        // username
            // String
            // Unique
            // Required
            // Trimmed
        username: {
            type: String,
            unique: true,
            required: 'Username is Required',
            trim: true
        },
        // email
            // String
            // Required
            // Unique
            // Must match a valid email address (look into Mongoose's matching validation)
        email: {
            type: String,
            unique: true,
            required: 'Email is Required',
            match: [/.+@+\..+/, 'Please enter a valid email address']
        }
    },
)




// thoughts

// Array of _id values referencing the Thought model
// friends

// Array of _id values referencing the User model (self-reference)