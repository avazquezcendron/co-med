import mongoose from 'mongoose';

const prescriptionSchema = mongoose.Schema(
  {
    diagnosis: { type: String, required: true },
    indications: { type: String, required: false },
    date: { type: Date, required: true, default: new Date() },
    requiresDuplicate: { type: Boolean, default: false },
    longTerm: { type: Boolean, default: false },
    drugs: [{
      indications: { type: String, required: true },     
      quantity: { type: Number, required: true },
      drug: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Drug',
      }
    }],
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Doctor',
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

prescriptionSchema.set('toJSON', {
  virtuals: true
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

export default Prescription;
