import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Button, Modal, Box, TextField, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios"; // Import axios

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "nombre", headerName: "NOMBRE", width: 200 },
  { field: "email", headerName: "EMAIL", width: 250 },
  { field: "telefono", headerName: "TELÉFONO", width: 150 },
  { field: "direccion", headerName: "DIRECCIÓN", width: 300 },
  {
    field: "acciones",
    headerName: "ACCIONES",
    width: 150,
    renderCell: (params) => (
      <>
        <IconButton color="primary" onClick={() => params.row.onEdit(params.row)}>
          <EditIcon />
        </IconButton>
        <IconButton color="secondary" onClick={() => params.row.onDelete(params.row)}>
          <DeleteIcon />
        </IconButton>
      </>
    ),
  },
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

export default function ClienteDataTable() {
  const [tableRows, setTableRows] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [editData, setEditData] = useState({});
  const [newData, setNewData] = useState({ nombre: "", email: "", telefono: "", direccion: "" });

  useEffect(() => {
    axios.get("http://localhost:3001/api/clientes")
      .then((response) => {
        const clientesWithId = response.data.map((cliente) => ({
          ...cliente,
          id: cliente._id, // Asigna el _id de MongoDB como id
        }));
        setTableRows(clientesWithId);
      })
      .catch((error) => {
        console.error("Error al cargar los clientes:", error);
      });
  }, []);

  const handleEditOpen = (row) => {
    setEditData(row);
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleDeleteOpen = (row) => {
    setSelectedRow(row);
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  const handleAddOpen = () => {
    setNewData({ nombre: "", email: "", telefono: "", direccion: "" });
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    setOpenAdd(false);
  };

  const handleEditSave = () => {
    axios.put(`http://localhost:3001/api/clientes/${editData.id}`, editData)
      .then((response) => {
        setTableRows(tableRows.map((row) => row.id === editData.id ? { ...editData } : row));
        handleEditClose();
      })
      .catch((error) => {
        console.error("Error al editar el cliente:", error);
      });
  };

  const handleDeleteConfirm = () => {
    axios.delete(`http://localhost:3001/api/clientes/${selectedRow.id}`)
      .then(() => {
        setTableRows(tableRows.filter((row) => row.id !== selectedRow.id));
        handleDeleteClose();
      })
      .catch((error) => {
        console.error("Error al eliminar el cliente:", error);
      });
  };

  const handleAddSave = () => {
    if (!newData.nombre || !newData.email || !newData.telefono || !newData.direccion) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    axios.post("http://localhost:3001/api/clientes", newData)
      .then((response) => {
        const nuevoCliente = { ...response.data, id: response.data._id };
        setTableRows([...tableRows, nuevoCliente]);
        handleAddClose();
      })
      .catch((error) => {
        console.error("Error al agregar el cliente:", error);
        alert("Ocurrió un error al agregar el cliente: " + error.message);
      });
  };

  return (
    <Paper sx={{ height: "auto", width: "auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>Lista de Clientes</Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAddOpen}
        sx={{ marginBottom: 2 }}
      >
        Agregar Cliente
      </Button>
      <DataGrid
        rows={tableRows.map((row) => ({
          ...row,
          onEdit: handleEditOpen,
          onDelete: handleDeleteOpen,
        }))}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ marginTop: 2, border: 0 }}
        slotProps={{
          pagination: { labelRowsPerPage: "Filas por página" },
        }}
      />

      {/* Modal para Editar */}
      <Modal open={openEdit} onClose={handleEditClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>Editar Cliente</Typography>
          <TextField
            label="Nombre"
            value={editData.nombre || ""}
            onChange={(e) => setEditData({ ...editData, nombre: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={editData.email || ""}
            onChange={(e) => setEditData({ ...editData, email: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Teléfono"
            value={editData.telefono || ""}
            onChange={(e) => setEditData({ ...editData, telefono: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Dirección"
            value={editData.direccion || ""}
            onChange={(e) => setEditData({ ...editData, direccion: e.target.value })}
            fullWidth
            margin="normal"
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
            <Button onClick={handleEditClose} sx={{ marginRight: 1 }}>Cancelar</Button>
            <Button variant="contained" color="primary" onClick={handleEditSave}>Guardar</Button>
          </Box>
        </Box>
      </Modal>

      {/* Modal para Eliminar */}
      <Modal open={openDelete} onClose={handleDeleteClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>¿Deseas eliminar este cliente?</Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
            <Button onClick={handleDeleteClose} sx={{ marginRight: 1 }}>No</Button>
            <Button variant="contained" color="error" onClick={handleDeleteConfirm}>Sí</Button>
          </Box>
        </Box>
      </Modal>

      {/* Modal para Agregar */}
      <Modal open={openAdd} onClose={handleAddClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>Agregar Cliente</Typography>
          <TextField
            label="Nombre"
            value={newData.nombre}
            onChange={(e) => setNewData({ ...newData, nombre: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={newData.email}
            onChange={(e) => setNewData({ ...newData, email: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Teléfono"
            value={newData.telefono}
            onChange={(e) => setNewData({ ...newData, telefono: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Dirección"
            value={newData.direccion}
            onChange={(e) => setNewData({ ...newData, direccion: e.target.value })}
            fullWidth
            margin="normal"
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
            <Button onClick={handleAddClose} sx={{ marginRight: 1 }}>Cancelar</Button>
            <Button variant="contained" color="primary" onClick={handleAddSave}>Guardar</Button>
          </Box>
        </Box>
      </Modal>
    </Paper>
  );
}
