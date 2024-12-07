import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://u22219693:O0alEsc58avYFTsm@cluster0.jnb7n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(">>> Conectado a MongoDB <<<");
  } catch (error) {
    console.error("Error al conectar con MongoDB:", error);
    process.exit(1); // Salir del proceso si no se puede conectar
  }
};  
  