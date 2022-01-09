import mongoose from 'mongoose'
import validator from 'validator'
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Provide Name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please Provide Email'],
    validate: {
      validator: validator.isEmail,
      messagee: 'Please provide an email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please Provide Password'],
    minlength: 6,
  },
  lastName: {
    type: String,

    default: 'last name',
    maxlength: 20,
    trim: true,
  },
  location: {
    type: String,
    default: 'location',
    maxlength: 20,
    default: 'my city',
  },
})

export default mongoose.model('User', UserSchema)
