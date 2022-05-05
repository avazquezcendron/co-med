import mongoose from 'mongoose';

const laboratoryExamSchema = mongoose.Schema(
  {
    fileUrl: { type: String },
    laboratories: [
      {
        value: { type: String, required: true },
        laboratorType: {
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
