import mongoose from 'mongoose'

const studyExamSchema = mongoose.Schema(
  {
    fileUrl: { type: String },
    studyType: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'StudyType',
    },
    healthRecord: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'HealthRecord',
    },
  },
  {
    timestamps: true,
  }
)
  
studyExamSchema.set('toJSON', {
  virtuals: true
});

const StudyExam = mongoose.model('StudyExam', studyExamSchema)

export default StudyExam