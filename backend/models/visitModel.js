import mongoose from 'mongoose';

const studyOrderSchema = mongoose.Schema(
  {
    indications: { type: String, required: false },
    diagnosis: { type: String, required: true },
    studyType: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'StudyType',
    },
  },
  {
    timestamps: true,
  }
);

const laboratoryOrderSchema = mongoose.Schema(
  {
    indications: { type: String, required: false },
    diagnosis: { type: String, required: true },
    laboratories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'LaboratoryType',
      },
    ],
  },
  {
    timestamps: true,
    optimisticConcurrency: true,
  }
);

const visitSchema = mongoose.Schema(
  {
    reason: { type: String, required: true },
    currentDisease: { type: String },
    eABackground: { type: String },
    notes: { type: String, required: false },
    diagnosis: { type: String, required: false },
    symptom: { type: String, required: false },
    evaluation: { type: String, required: false },
    indications: { type: String, required: false },
    firstVisit: { type: Boolean, default: false },
    studyOrders: [studyOrderSchema],
    laboratoryOrders: [laboratoryOrderSchema],
    healthRecord: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'HealthRecord',
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Doctor',
    },
    prescriptions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Prescription',
      },
    ],
  },
  {
    timestamps: true,
  }
);

visitSchema.set('toJSON', {
  virtuals: true,
});

const Visit = mongoose.model('Visit', visitSchema);

export default Visit;
