import mongoose from 'mongoose';

const studyOrderSchema = mongoose.Schema(
  {
    instructions: { type: String, required: true },
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
    instructions: { type: String, required: true },
    diagnosis: { type: String, required: true },
    laboratory: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'LaboratoryType',
    },
  },
  {
    timestamps: true,
    optimisticConcurrency: true
  }
);

const visitSchema = mongoose.Schema(
  {
    reason: { type: String, required: true },
    notes: { type: String, required: true },
    diagnosis: { type: String, required: true },
    symptom: { type: String, required: true },
    evaluation: { type: String, required: true },
    studyOrders: [ studyOrderSchema ],
    laboratoryOrders: [ laboratoryOrderSchema ],
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

const Visit = mongoose.model('Visit', visitSchema);

export default Visit;
