import mongoose from 'mongoose'

var ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  blogPost: {
    type: mongoose.Schema.ObjectId,
    required: false
  },
  sticky: {
    type: Boolean,
    required: true,
    default: false
  },
  created: {
    type: Date,
    required: true
  },
  tags: {
    type: [String],
    required: false
  }
})

export default mongoose.model('Project', ProjectSchema)
