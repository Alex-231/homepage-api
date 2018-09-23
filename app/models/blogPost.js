import mongoose from 'mongoose'

var BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  sticky: {
    type: Boolean,
    required: true,
    default: false
  },
  authorId: {
    type: mongoose.Schema.ObjectId,
    required: false
  },
  created: {
    type: Date,
    required: true
  },
  tags: {
    type: [String],
    required: false
  },
  lastEdited: {
    type: Date,
    required: false
  },
  draft: {
    type: Boolean,
    required: true,
    default: false
  }
})

BlogPostSchema.pre('validate', function (next) {
  // If there's no profile create date, add one now.
  if (!this.created) {
    this.created = Date.now()
  }

  return next()
})

export default mongoose.model('BlogPost', BlogPostSchema)
