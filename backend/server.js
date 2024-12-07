import app from './app.js';
import { connectDB } from './db.js';

const PORT = 3001;
connectDB(); // Conectar a la base de datos antes de iniciar el servidor
app.listen(PORT, () => console.log("Web server on port:", PORT)); 

