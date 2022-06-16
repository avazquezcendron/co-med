import mongoose from 'mongoose';

import fileSchema from './fileSchema.js';

const healthRecordHistorySchema = mongoose.Schema(
  {
    // date: { type: Date, default: new Date() },
    username: { type: String, required: true },
    diff: {},
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

healthRecordHistorySchema.set('toJSON', {
  virtuals: true,
});

healthRecordHistorySchema.set('toObject', {
  virtuals: true,
});

const HealthRecordHistory = mongoose.model(
  'HealthRecordHistory',
  healthRecordHistorySchema
);

export default HealthRecordHistory;
