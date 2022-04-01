import mongoose from 'mongoose';

const prescriptionSchema = mongoose.Schema(
  {
    diagnosis: { type: String, required: true },
    indications: { type: String, required: true },
    date: { type: Date, required: true },
    quantity: { type: Number, required: true },
    requiresDuplicate: { type: Boolean, default: false },
    longTerm: { type: Boolean, default: false },
    drugId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Drug',
    },
    healthRecord: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'HealthRecord',
    },
    visit: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Visit',
    },
  },
  {
    timestamps: true,
  }
);

const Prescription = mongoose.model('Prescription', prescriptionSchema);

export default Prescription;
