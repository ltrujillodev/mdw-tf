import mongoose from 'mongoose';

const negocioSchema = new mongoose.Schema({
  negocio: { type: String, required: true },
  razonSocial: { type: String, required: true },
  ruc: { type: String, required: true, unique: true },
  direccion: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Negocio', negocioSchema);
