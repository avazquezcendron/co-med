import mongoose from 'mongoose';

const fileSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    fileType: { type: String },
    downloadURL: String,
    uploadedDate: { type: Date, default: new Date()}
  }
)
  
export default fileSchema;