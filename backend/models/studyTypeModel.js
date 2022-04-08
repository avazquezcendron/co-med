import mongoose from 'mongoose'

const studyTypeSchema = mongoose.Schema(
  {
    // code: { type: String, required: true },
    description: { type: String, required: true, unique: true, index: true },
  },
  {
    timestamps: true,
  }
)
  
studyTypeSchema.set('toJSON', {
  virtuals: true
});

const StudyType = mongoose.model('StudyType', studyTypeSchema)

export default StudyType