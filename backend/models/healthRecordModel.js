import mongoose from 'mongoose';

const healthRecordSchema = mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Patient',
    },
    prescriptions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Prescription',
      },
    ],
    laboratoryExams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'LaboratoryExam',
      },
    ],
    visits: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Visit',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const HealthRecord = mongoose.model('HealthRecord', healthRecordSchema);

export default HealthRecord;
