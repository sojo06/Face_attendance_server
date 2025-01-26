import mongoose from "mongoose";

const FaceDataSchema = new mongoose.Schema({
    label: String,
    rollno:Number,
    Name:String,
    confidence: Number,
    timestamp: String
  });
  
  const FaceData = mongoose.model('FaceData', FaceDataSchema);
  export default FaceData