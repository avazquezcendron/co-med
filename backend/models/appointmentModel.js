import mongoose from 'mongoose'

const appointmentSchema = mongoose.Schema(
  {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    description: { type: String, required: false },
    type: { type: String, required: true },
    mode: { type: String, required: true },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Doctor',
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Patient',
    },
    status: { type: String, default: 'active' },
  },
  {
    timestamps: true,
    optimisticConcurrency: true
  }
)
  
appointmentSchema.set('toJSON', {
  virtuals: true
});

appointmentSchema.virtual('title').get(function () { 
  return `${this.patient.fullName} - ${this.mode}`;
});

const Appointment = mongoose.model('Appointment', appointmentSchema)

export default Appointment