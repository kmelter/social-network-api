const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address.']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ]//,
        //friends: [UserSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// UserSchema.virtual('friendCount').get(function() {
//     return this.friends.length;
// });

// get total count of comments and replies on retrieval
UserSchema.virtual('thoughtCount').get(function() {
    return this.thoughts.reduce(
      (total, thought) => total + thought.reactions.length + 1,
      0
    );
  });

const User = model('User', UserSchema);

module.exports = User;