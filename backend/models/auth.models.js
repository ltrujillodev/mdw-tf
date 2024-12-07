import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nombres: { type: String, required: true, trim: true },
  apellidos: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  telefono: { type: String, required: false, trim: true }, 
}, {
  timestamps: true,
  versionKey: false
});

export default mongoose.model('User', userSchema);
