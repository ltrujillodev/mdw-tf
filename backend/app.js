import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRouters from "./routes/auth.routers.js";
import negociosRoutes from "./routes/negocio.routers.js";
import reservasRouter from "./routes/reserva.routers.js";
import facturacionRouter from "./routes/facturacion.routers.js";
import clienteRouter from "./routes/cliente.routers.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // URL del frontend
    credentials: true, // Permite el envío de cookies
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Define las rutas de la API
app.use("/api/auth", authRouters);
app.use("/api/negocios", negociosRoutes);
app.use("/api/reservas", reservasRouter);
app.use("/api/facturacion", facturacionRouter);
app.use("/api/clientes", clienteRouter);

export default app;
