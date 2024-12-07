import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Button, Modal, Box, TextField, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios"; // Importa axios

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "negocio", headerName: "NEGOCIO", width: 200 },
  { field: "razonSocial", headerName: "RAZÓN SOCIAL", width: 250 },
  { field: "ruc", headerName: "RUC", width: 125 },
  { field: "direccion", headerName: "DIRECCIÓN", width: 350 },
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

export default function DataTable() {
  const [tableRows, setTableRows] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [editData, setEditData] = useState({});
  const [newData, setNewData] = useState({ negocio: "", razonSocial: "", ruc: "", direccion: "" });

  useEffect(() => {
    axios.get("http://localhost:3001/api/negocios")
      .then((response) => {
        const negociosWithId = response.data.map((negocio) => ({
          ...negocio,
          id: negocio._id, // Asigna el _id de MongoDB como id
        }));
        setTableRows(negociosWithId);
      })
      .catch((error) => {
        console.error("Error al cargar los negocios:", error);
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
    setNewData({ negocio: "", razonSocial: "", ruc: "", direccion: "" });
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    setOpenAdd(false);
  };

  const handleEditSave = () => {
    console.log('Editando negocio con id:', editData.id);  // Verifica que el id sea correcto
    axios.put(`http://localhost:3001/api/negocios/${editData.id}`, editData)
      .then((response) => {
        console.log('Respuesta al editar:', response.data);  // Verifica la respuesta del servidor
        setTableRows(tableRows.map((row) => 
          row.id === editData.id ? { ...editData } : row
        ));
        handleEditClose();  // Cierra el modal después de guardar la edición
      })
      .catch((error) => {
        console.error("Error al editar el negocio:", error);
      });
  };
  

  const handleDeleteConfirm = () => {
    axios.delete(`http://localhost:3001/api/negocios/${selectedRow.id}`)
      .then(() => {
        setTableRows(tableRows.filter((row) => row.id !== selectedRow.id));
        handleDeleteClose();  // Cerrar el modal después de eliminar el negocio
      })
      .catch((error) => {
        console.error("Error al elimi nar el negocio:", error);
      });
  };

  

  const handleAddSave = () => {
    if (!newData.negocio || !newData.razonSocial || !newData.ruc || !newData.direccion) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    console.log("Datos enviados al backend:", newData); // Verifica qué datos envías
    axios.post("http://localhost:3001/api/negocios", newData)
      .then((response) => {
        console.log("Respuesta del servidor:", response.data); // Verifica la respuesta del servidor
        const nuevoNegocio = {
          ...response.data,
          id: response.data._id, // Usa el _id como id para la tabla
        };
        setTableRows([...tableRows, nuevoNegocio]); // Agrega el nuevo negocio al estado
        handleAddClose(); // Cierra el modal
      })
      .catch((error) => {
        console.error("Error al agregar el negocio:", error);
        alert("Ocurrió un error al agregar el negocio: " + error.message);
      });


  };
  

  return (
    <Paper sx={{ height: "auto", width: "auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>Lista de Negocios</Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAddOpen}
        sx={{ marginBottom: 2 }}
      >
        Agregar Negocio
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
          <Typography variant="h6" gutterBottom>Editar Negocio</Typography>
          <TextField
            label="Negocio"
            value={editData.negocio || ""}
            onChange={(e) => setEditData({ ...editData, negocio: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Razón Social"
            value={editData.razonSocial || ""}
            onChange={(e) => setEditData({ ...editData, razonSocial: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="RUC"
            value={editData.ruc || ""}
            onChange={(e) => setEditData({ ...editData, ruc: e.target.value })}
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
          <Typography variant="h6" gutterBottom>¿Deseas eliminar este registro?</Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
            <Button onClick={handleDeleteClose} sx={{ marginRight: 1 }}>No</Button>
            <Button variant="contained" color="error" onClick={handleDeleteConfirm}>Sí</Button>
          </Box>
        </Box>
      </Modal>

      {/* Modal para Agregar */}
      <Modal open={openAdd} onClose={handleAddClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>Agregar Negocio</Typography>
          <TextField
            label="Negocio"
            value={newData.negocio}
            onChange={(e) => setNewData({ ...newData, negocio: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Razón Social"
            value={newData.razonSocial}
            onChange={(e) => setNewData({ ...newData, razonSocial: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="RUC"
            value={newData.ruc}
            onChange={(e) => setNewData({ ...newData, ruc: e.target.value })}
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
