import mongoose from 'mongoose';
import moment from 'moment';

const appointmentSchema = mongoose.Schema(
  {
    start: { type: Date, required: true },
    end: { type: Date, required: false },
    description: { type: String, required: false },
    appointmentType: { type: String, required: true },
    mode: { type: String, required: true },
    constraint: { type: String, required: false, default: 'businessHours' }, //TODO: fix: this is a FullCalendar property, it shouldn't be here.
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
    status: {
      type: String,
      enum: ['active', 'done', 'cancelled', 'expired'],
      default: 'active',
    },
  },
  {
    timestamps: true,
    optimisticConcurrency: true,
  }
);

appointmentSchema.set('toJSON', {
  virtuals: true,
});

appointmentSchema.virtual('title').get(function () {
  // return `Paciente ${this.patient.fullName} (${this.patient.healthInsurances?.length > 0 ? this.patient.healthInsurances[0].healthInsuranceCompany
  //   .description : 'particular'}) - ${this.doctor.biologicalSex === 'm' ? 'Dr. '  : 'Dra. '}${this.doctor.fullName} | ${this.mode}`;
  return this.patient.fullName;
});

appointmentSchema.virtual('isDone').get(function () {
  return this.status === 'done';
});

appointmentSchema.virtual('isCancelled').get(function () {
  return this.status === 'cancelled';
});

appointmentSchema.virtual('isActive').get(function () {
  const startAux = new Date(this.start.getTime());
  if (!moment(startAux.setHours(startAux.getHours() + 3)).isBefore(moment().subtract(2, 'h')) && this.status === 'active') {
    return true;
  }
  return false;
});

appointmentSchema.virtual('isExpired').get(function () {
  const startAux = new Date(this.start.getTime());
  if (moment(startAux.setHours(startAux.getHours() + 3)).isBefore(moment().subtract(2, 'h')) && this.status === 'active') {
    return true;
  }
  return false;
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
