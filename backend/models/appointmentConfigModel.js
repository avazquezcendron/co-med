import mongoose from 'mongoose';

const appointmentConfigSchema = mongoose.Schema(
  {
    description: { type: String },
    date: { type: Date, required: false },
    slotHours: { type: Number, required: true, default: 0 },
    slotMinutes: { type: Number, required: true, default: 30 },
    slotPreparation: { type: Number, required: true, default: 0 },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Doctor',
    },
    sessions: [
      {
        sessionType: String,
        startTime: String,
        endTime: String,
        daysOfWeek: [Number],
      },
    ],
  },
  {
    timestamps: true,
  }
);

appointmentConfigSchema.set('toJSON', {
  virtuals: true
});

appointmentConfigSchema.set('toObject', {
  virtuals: true
});

appointmentConfigSchema.path('sessions').schema.virtual('daysOfWeekString').get(function () { 
  const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const daysString = this.daysOfWeek.map(x => days[x]);
  return daysString;
});

appointmentConfigSchema.virtual('doctorName').get(function () { 
  return this.doctor ? this.doctor.fullName : '';
});

const AppointmentConfig = mongoose.model(
  'AppointmentConfig',
  appointmentConfigSchema
);

export default AppointmentConfig;
