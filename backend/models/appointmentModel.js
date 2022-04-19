import mongoose from 'mongoose'

const appointmentSchema = mongoose.Schema(
  {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    description: { type: String, required: false },
    appointmentType: { type: String, required: true },
    mode: { type: String, required: true },
    constraint: { type: String, required: false, default: 'businessHours' },//TODO: fix: this is a FullCalendar property, it shouldn't be here.
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