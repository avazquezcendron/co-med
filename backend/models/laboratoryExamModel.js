import mongoose from 'mongoose';

import fileSchema from './fileSchema.js';

const laboratoryExamSchema = mongoose.Schema(
  {
    files: [ fileSchema ],
    laboratories: [
      {
        value: { type: String, required: true },
        laboratoryType: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'LaboratoryType',
        },
      },
    ],
    healthRecord: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'HealthRecord',
    },
  },
  {
    timestamps: true,
  }
);

laboratoryExamSchema.set('toJSON', {
  virtuals: true,
});

const LaboratoryExam = mongoose.model('LaboratoryExam', laboratoryExamSchema);

export default LaboratoryExam;
