import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  sentence: String,
  commenter: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true
})

const wordSchema = new Schema({
  slang: String,
  definitions: Array,
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  comments: [commentSchema],
  guessed: Array,
}, {
  timestamps: true,
})

const Word = mongoose.model('Word', wordSchema)

export {
  Word
}