import mongoose from 'mongoose'

const tagSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, index: true },
  },
  {
    timestamps: true,
  }
)
  
tagSchema.set('toJSON', {
  virtuals: true
});

const Tag = mongoose.model('Tag', tagSchema)

export default Tag