import mongoose from 'mongoose';

const fileSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    fileType: { type: String },
    downloadURL: String,
    uploadedDate: Date
  }
)
  
export default fileSchema;