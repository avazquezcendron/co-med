import mongoose from 'mongoose'

import fileSchema from './fileSchema.js';

const studyExamSchema = mongoose.Schema(
  {
    files: [fileSchema],
    date: { type: Date },
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