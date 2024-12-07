import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema({
  negocio: { type: String, required: true },
  fecha: { type: Date, required: true },
  importe: { type: Number, required: true },
  estado: { type: String, required: true },
  pago: { type: String, required: true },
},{ timestamps: true });

const Reserva = mongoose.model("Reserva", reservaSchema);

export default Reserva;
