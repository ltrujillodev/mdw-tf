import React, { useState, useEffect } from "react";
import axios from "axios"; // Importar Axios
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Button, IconButton, Modal, TextField, MenuItem, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Íconos
import RuleIcon from "@mui/icons-material/Rule";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

// Estados y métodos de pago
const estados = [
  { value: "completado", label: "Completado", icon: <PriceCheckIcon /> },
  { value: "cancelado", label: "Cancelado", icon: <RuleIcon /> },
  { value: "recibido", label: "Recibido", icon: <PlaylistAddCheckIcon /> },
];

const metodosPago = [
  { value: "tarjeta", label: "Tarjeta", icon: <CreditCardIcon /> },
  { value: "efectivo", label: "Efectivo", icon: <LocalAtmIcon /> },
  { value: "yape", label: "Yape", icon: <QrCodeScannerIcon /> },
];

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ReservasTable({ onFacturaCreated }) {
  const [rows, setRows] = useState([]); // Datos de las reservas
  const [modalOpen, setModalOpen] = useState(false);
  const [negocios, setNegocios] = useState([]); // Estado para almacenar los negocios
  const [newReserva, setNewReserva] = useState({
    negocio: "",
    fecha: "",
    importe: "",
    estado: "",
    pago: "",
  });
  const [selectedReserva, setSelectedReserva] = useState(null);

  const API_URL = "http://localhost:3001/api/reservas"; // URL del backend

  // Cargar datos iniciales
  useEffect(() => {
    console.log("Cargando reservas y negocios...");
    fetchReservas();
    fetchNegocios();
  }, []);

  const fetchReservas = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/reservas");
      setRows(
        response.data.map((reserva, index) => ({
          id: index + 1, // Agregar ID temporal para DataGrid
          ...reserva,
        }))
      );
    } catch (error) {
      console.error("Error al cargar reservas:", error);
    }
  };

  const fetchNegocios = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/negocios");
      setNegocios(response.data);
      console.log("Negocios cargados:", response.data); // Verifica que los negocios estén correctos
    } catch (error) {
      console.error("Error al cargar negocios:", error);
    }
  };

  const handleSave = async () => {
    try {
      console.log("Enviando datos:", newReserva);
  
      // Crear reserva
      const reservaResponse = await axios.post(API_URL, newReserva);
      const newReservaData = reservaResponse.data;
  
      // Crear factura asociada
      const facturaData = {
        negocio: newReservaData.negocio,
        razonSocial: "Nombre del negocio", // Puedes ajustarlo según tus datos
        ruc: "12345678901", // Ajusta según los requisitos
        direccion: "Dirección de ejemplo", // O usa datos dinámicos si están disponibles
        fecha: newReservaData.fecha,
        importe: newReservaData.importe,
        reserva: newReservaData._id,
      };
  
      const facturaResponse = await axios.post("http://localhost:3001/api/facturacion", facturaData);
      console.log("Factura creada:", facturaResponse.data);
  
      // Actualizar tablas
      setRows([...rows, { id: rows.length + 1, ...newReservaData }]);
      if (onFacturaCreated) {
        onFacturaCreated(facturaResponse.data);
      }
  
      // Limpiar formulario y cerrar modal
      setNewReserva({ negocio: "", fecha: "", importe: "", estado: "", pago: "" });
      handleCloseModal();
    } catch (error) {
      console.error("Error al guardar la reserva y factura:", error);
    }
  };
  ;

  const handleView = (reserva) => {
    setSelectedReserva(reserva);
  };

  const handleCloseModal = () => setModalOpen(false);
  const handleOpenModal = () => setModalOpen(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReserva({ ...newReserva, [name]: value });
  };

  return (
    <Paper sx={{ height: "auto", width: "100%" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenModal}
        sx={{ margin: 2 }}
      >
        Agregar Reserva
      </Button>
      <DataGrid
        rows={rows}
        columns={[
          { field: "id", headerName: "ID", width: 50 },
          { field: "negocio", headerName: "NEGOCIO", width: 200 },
          { field: "fecha", headerName: "FECHA", width: 150 },
          { field: "importe", headerName: "TOTAL", width: 150 },
          {
            field: "estado",
            headerName: "Estado",
            width: 150,
            renderCell: (params) =>
              estados.find((e) => e.value === params.value)?.icon || null,
          },
          {
            field: "pago",
            headerName: "MÉTODO DE PAGO",
            width: 200,
            renderCell: (params) =>
              metodosPago.find((m) => m.value === params.value)?.icon || null,
          },
          {
            field: "accion",
            headerName: "ACCIÓN",
            width: 150,
            renderCell: (params) => (
              <IconButton onClick={() => handleView(params.row)}>
                <RemoveRedEyeIcon />
              </IconButton>
            ),
          },
        ]}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />

      {/* Modal para agregar reserva */}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          <h2>Agregar Reserva</h2>
          <TextField
            fullWidth
            select
            label="Negocio"
            name="negocio"
            value={newReserva.negocio || ""}
            onChange={handleInputChange}
            margin="normal"
          >
            <MenuItem value="">Selecciona un negocio</MenuItem>
            {negocios.map((negocio) => (
              <MenuItem key={negocio._id} value={negocio.negocio}>
                {negocio.negocio}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            type="date"
            label="Fecha"
            name="fecha"
            value={newReserva.fecha}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Importe"
            name="importe"
            type="number"
            value={newReserva.importe}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            fullWidth
            select
            label="Estado"
            name="estado"
            value={newReserva.estado}
            onChange={handleInputChange}
            margin="normal"
          >
            {estados.map((estado) => (
              <MenuItem key={estado.value} value={estado.value}>
                {estado.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            select
            label="Método de Pago"
            name="pago"
            value={newReserva.pago}
            onChange={handleInputChange}
            margin="normal"
          >
            {metodosPago.map((metodo) => (
              <MenuItem key={metodo.value} value={metodo.value}>
                {metodo.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{ marginTop: 2 }}
          >
            Guardar
          </Button>
        </Box>
      </Modal>
    </Paper>
  );
}
