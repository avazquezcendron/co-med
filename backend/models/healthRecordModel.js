import mongoose from 'mongoose';

const healthRecordSchema = mongoose.Schema(
  {
    healthRecordNumber: { type: Number, required: true, unique: true },    
    bloodType: String,
    rhFactor: String,
    vitalsAndMetrics: [{
      date: Date,
      systolicBloodPressure: Number,
      diastolicBloodPressure: Number,
      breathingRate: Number,
      heartRate: Number,
      temperature: Number,
      bodyFat: Number,
      bodyWeight: Number,
      weight: Number,
      height: Number,
    }],
    pathologicalBackground: {
      heartDisease: String,
      injuries: String,
      diabetes: String,
      arterialHypertension: String,
      endocrineMetabolic: String,
      respiratory: String,
      glaucoma: String,
      digestive: String,
      oncological: String,
      neurological: String,
      infectological: String,
      nephrourological: String,
      gynecoObstetrics: String,
      std: String,
      hematological: String,
      transfusions: String,
      hospitalizations: String,
      surgeries: String,
      others: String
    },    
    noPathologicalBackground: {
      smoking: String,
      Alcoholism: String,
      drugs: String,
      recentVaccine: String,
      physicalActivities: String,
      others: String
    },
    hereditaryBackground: {
      heartDisease: String,
      thyroid: String,
      diabetes: String,
      arterialHypertension: String,
      glaucoma: String,
      neurological: String,
      oncological: String,
      others: String
    },
    psychiatricBackgroud: String,
    nutritionalBackgroud: String,
    allergiesInfo: {
      allergies: [String],
      extraComments: String,
    },
    drugsInfo: {
      drugs: [
        {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: 'Drug',
        },
      ],
      extraComments: String,
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
    studyExams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'StudyExam',
      },
    ],
    visits: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Visit',
      },
    ],
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Patient',
    },
  },
  {
    timestamps: true,
    optimisticConcurrency: true,
  }
);

healthRecordSchema.set('toJSON', {
  virtuals: true,
});

const HealthRecord = mongoose.model('HealthRecord', healthRecordSchema);

export default HealthRecord;
