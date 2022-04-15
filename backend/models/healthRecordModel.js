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
      heartDisease: Boolean,
      heartDiseaseText: String,
      injuries: Boolean,
      injuriesText: String,
      diabetes: Boolean,
      diabetesText: String,
      arterialHypertension: Boolean,
      arterialHypertensionText: String,
      endocrineMetabolic: Boolean,
      endocrineMetabolicText: String,
      respiratory: Boolean,
      respiratoryText: String,
      glaucoma: Boolean,
      glaucomaText: String,
      digestive: Boolean,
      digestiveText: String,
      oncological: Boolean,
      oncologicalText: String,
      neurological: Boolean,
      neurologicalText: String,
      infectological: Boolean,
      infectologicalText: String,
      nephrourological: Boolean,
      nephrourologicalText: String,
      gynecoObstetrics: Boolean,
      gynecoObstetricsText: String,
      std: Boolean,
      stdText: String,
      hematological: Boolean,
      hematologicalText: String,
      transfusions: Boolean,
      transfusionsText: String,
      hospitalizations: Boolean,
      hospitalizationsText: String,
      surgeries: Boolean,
      surgeriesText: String,
      others: String
    },    
    noPathologicalBackground: {
      smoking: Boolean,
      smokingText: String,
      alcoholism: Boolean,
      alcoholismText: String,
      drugs: Boolean,
      drugsText: String,
      vaccines: Boolean,
      vaccinesText: String,
      physicalActivities: Boolean,
      physicalActivitiesText: String,
      others: String
    },
    hereditaryBackground: {
      thyroid: Boolean,
      thyroidText: String,
      heartDisease: Boolean,
      heartDiseaseText: String,
      diabetes: Boolean,
      diabetesText: String,
      arterialHypertension: Boolean,
      arterialHypertensionText: String,
      glaucoma: Boolean,
      glaucomaText: String,
      neurological: Boolean,
      neurologicalText: String,
      oncological: Boolean,
      oncologicalText: String,
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
